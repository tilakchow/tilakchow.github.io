import React, { useEffect, useState, useMemo } from 'react';
import './Calendar.css';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ApiResponse {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

// Grayscale theme matching screenshot and Manish's portfolio:
// Level 0: #262626 / #2b2b2b, Level 1: #4a4a4a, Level 2: #757575, Level 3: #a3a3a3, Level 4: #ffffff
const COLOR_LEVELS = ['#262626', '#4a4a4a', '#757575', '#a3a3a3', '#ffffff'];

export const GitHubCalendar: React.FC<{ username?: string }> = ({ username = 'tilakchow' }) => {
  const [allContributions, setAllContributions] = useState<ContributionDay[]>([]);
  const [totalMap, setTotalMap] = useState<Record<string, number>>({});
  const [availableYears, setAvailableYears] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>(() => new Date().getFullYear().toString());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; text: string } | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    // Fetch all contributions to allow year-by-year filtering starting from January
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch contributions');
        return res.json() as Promise<ApiResponse>;
      })
      .then((resData) => {
        if (!isMounted) return;
        const contributions = resData.contributions || [];
        const totals = resData.total || {};

        const yearsFromTotal = Object.keys(totals).filter((k) => /^\d{4}$/.test(k));
        const yearsFromContribs = Array.from(
          new Set(contributions.map((c) => c.date.slice(0, 4)))
        );
        const combinedYears = Array.from(new Set([...yearsFromTotal, ...yearsFromContribs])).sort(
          (a, b) => Number(b) - Number(a)
        );

        setAllContributions(contributions);
        setTotalMap(totals);
        setAvailableYears(combinedYears);

        setSelectedYear((prev) => (combinedYears.includes(prev) ? prev : combinedYears[0] || prev));
        setLoading(false);
      })
      .catch((err) => {
        if (!isMounted) return;
        console.error('Error fetching github contributions:', err);
        setError('Unable to load GitHub contributions');
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [username]);

  // Contributions for the selected year, ordered Jan 1 -> Dec 31
  const yearData = useMemo(() => {
    if (!allContributions || allContributions.length === 0) return [];
    return allContributions
      .filter((c) => c.date.startsWith(selectedYear))
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [allContributions, selectedYear]);

  // Total count for the selected year
  const yearTotal = useMemo(() => {
    if (totalMap[selectedYear] !== undefined) {
      return totalMap[selectedYear];
    }
    return yearData.reduce((acc, c) => acc + c.count, 0);
  }, [totalMap, selectedYear, yearData]);

  // Organize contributions into weeks (columns) of 7 days (rows)
  const { weeks, monthLabels } = useMemo(() => {
    if (!yearData || yearData.length === 0) return { weeks: [], monthLabels: [] };

    // Align start to the preceding Sunday using local calendar date
    const [y, m, d] = yearData[0].date.split('-').map(Number);
    const firstDate = new Date(y, m - 1, d);
    const dayOfWeek = firstDate.getDay(); // 0 is Sunday
    const padded: (ContributionDay | null)[] = [...Array(dayOfWeek).fill(null), ...yearData];

    const computedWeeks: (ContributionDay | null)[][] = [];
    for (let i = 0; i < padded.length; i += 7) {
      computedWeeks.push(padded.slice(i, i + 7));
    }

    // Determine month labels (starts with Jan for the calendar year)
    const labels: { xIndex: number; name: string }[] = [];
    let lastMonth = -1;

    computedWeeks.forEach((week, wIndex) => {
      const validDay = week.find((item) => item !== null);
      if (validDay) {
        const [dayY, dayM, dayD] = validDay.date.split('-').map(Number);
        const dayDate = new Date(dayY, dayM - 1, dayD);
        const monthNum = dayDate.getMonth();
        if (monthNum !== lastMonth) {
          lastMonth = monthNum;
          const monthName = dayDate.toLocaleString('en-US', { month: 'short' });
          labels.push({ xIndex: wIndex, name: monthName });
        }
      }
    });

    // Filter labels that are placed too closely
    const filteredLabels = labels.filter((lbl, idx, arr) => {
      if (idx === 0 && arr.length > 1 && arr[1].xIndex - lbl.xIndex < 2) return false;
      return true;
    });

    return { weeks: computedWeeks, monthLabels: filteredLabels };
  }, [yearData]);

  const blockSize = 11;
  const blockGap = 3.5;
  const headerOffset = 22; // space for month labels
  const totalSvgWidth = weeks.length * (blockSize + blockGap);
  const totalSvgHeight = headerOffset + 7 * (blockSize + blockGap);

  if (loading) {
    return (
      <div className="calendar-container">
        <div style={{ color: '#888', fontSize: '0.85rem', textAlign: 'center', padding: '16px 0' }}>
          Loading GitHub activity...
        </div>
      </div>
    );
  }

  if (error || weeks.length === 0) {
    return null;
  }

  return (
    <div className="calendar-container">
      {/* Header with year selection */}
      <div className="calendar-header">
        <div className="calendar-title">
          Contributions in <span className="calendar-year-badge">{selectedYear}</span>
        </div>
        {availableYears.length > 1 && (
          <div className="calendar-year-pills">
            {availableYears.map((yr) => (
              <button
                key={yr}
                type="button"
                className={`calendar-year-btn ${yr === selectedYear ? 'active' : ''}`}
                onClick={() => setSelectedYear(yr)}
                aria-label={`View contributions for ${yr}`}
              >
                {yr}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="calendar-scroll-wrap">
        <svg
          width={totalSvgWidth}
          height={totalSvgHeight}
          className="calendar-svg"
          viewBox={`0 0 ${totalSvgWidth} ${totalSvgHeight}`}
        >
          {/* Month labels */}
          <g className="calendar-months">
            {monthLabels.map(({ xIndex, name }) => (
              <text
                key={`${xIndex}-${name}`}
                x={xIndex * (blockSize + blockGap)}
                y={12}
                fill="#d4d4d4"
                fontSize="11px"
                fontFamily="Figtree, sans-serif"
                dominantBaseline="hanging"
              >
                {name}
              </text>
            ))}
          </g>

          {/* Day blocks */}
          <g transform={`translate(0, ${headerOffset})`}>
            {weeks.map((week, wIdx) => (
              <g key={wIdx} transform={`translate(${wIdx * (blockSize + blockGap)}, 0)`}>
                {week.map((day, dIdx) => {
                  if (!day) return null;
                  const color = COLOR_LEVELS[day.level] || COLOR_LEVELS[0];
                  return (
                    <rect
                      key={day.date}
                      y={dIdx * (blockSize + blockGap)}
                      width={blockSize}
                      height={blockSize}
                      rx={2}
                      ry={2}
                      fill={color}
                      style={{ cursor: 'pointer', transition: 'stroke 0.15s ease' }}
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const [dy, dm, dd] = day.date.split('-').map(Number);
                        const formattedDate = new Date(dy, dm - 1, dd).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        });
                        setTooltip({
                          x: rect.left + rect.width / 2,
                          y: rect.top - 8,
                          text: `${day.count} contribution${day.count === 1 ? '' : 's'} on ${formattedDate}`,
                        });
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    />
                  );
                })}
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Footer count and legend */}
      <div className="calendar-footer">
        <div className="calendar-count">
          In {selectedYear}, I achieved {yearTotal} contribution{yearTotal === 1 ? '' : 's'}
        </div>
        <div className="calendar-legend">
          <span className="calendar-legend-label">Less</span>
          {COLOR_LEVELS.map((col, idx) => (
            <span
              key={idx}
              className="calendar-legend-dot"
              style={{ backgroundColor: col }}
            />
          ))}
          <span className="calendar-legend-label">More</span>
        </div>
      </div>

      {/* Fixed tooltip */}
      {tooltip && (
        <div
          className="calendar-tooltip"
          style={{ left: `${tooltip.x}px`, top: `${tooltip.y}px` }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
};

export default GitHubCalendar;
