import React, { useEffect, useState, useMemo } from 'react';
import './Calendar.css';

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ApiResponse {
  total: {
    [key: string]: number;
    lastYear: number;
  };
  contributions: ContributionDay[];
}

// Grayscale theme matching screenshot and Manish's portfolio:
// Level 0: #262626 / #2b2b2b, Level 1: #4a4a4a, Level 2: #757575, Level 3: #a3a3a3, Level 4: #ffffff
const COLOR_LEVELS = ['#262626', '#4a4a4a', '#757575', '#a3a3a3', '#ffffff'];

export const GitHubCalendar: React.FC<{ username?: string }> = ({ username = 'tilakchow' }) => {
  const [data, setData] = useState<ContributionDay[]>([]);
  const [totalCount, setTotalCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; text: string } | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch contributions');
        return res.json() as Promise<ApiResponse>;
      })
      .then((resData) => {
        if (!isMounted) return;
        setData(resData.contributions || []);
        setTotalCount(resData.total?.lastYear ?? resData.contributions.reduce((acc, c) => acc + c.count, 0));
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

  // Organize contributions into weeks (columns) of 7 days (rows)
  const { weeks, monthLabels } = useMemo(() => {
    if (!data || data.length === 0) return { weeks: [], monthLabels: [] };

    // Align start to the preceding Sunday or Monday if needed
    const firstDate = new Date(data[0].date);
    const dayOfWeek = firstDate.getDay(); // 0 is Sunday
    const padded: (ContributionDay | null)[] = [...Array(dayOfWeek).fill(null), ...data];

    const computedWeeks: (ContributionDay | null)[][] = [];
    for (let i = 0; i < padded.length; i += 7) {
      computedWeeks.push(padded.slice(i, i + 7));
    }

    // Determine month labels
    const labels: { xIndex: number; name: string }[] = [];
    let lastMonth = -1;

    computedWeeks.forEach((week, wIndex) => {
      const validDay = week.find((d) => d !== null);
      if (validDay) {
        const d = new Date(validDay.date);
        const m = d.getMonth();
        if (m !== lastMonth) {
          lastMonth = m;
          const monthName = d.toLocaleString('en-US', { month: 'short' });
          labels.push({ xIndex: wIndex, name: monthName });
        }
      }
    });

    // Filter labels too close together
    const filteredLabels = labels.filter((lbl, idx, arr) => {
      if (idx === 0 && arr.length > 1 && arr[1].xIndex - lbl.xIndex < 3) return false;
      return true;
    });

    return { weeks: computedWeeks, monthLabels: filteredLabels };
  }, [data]);

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
                        const formattedDate = new Date(day.date).toLocaleDateString('en-US', {
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
          This year, I achieved {totalCount ?? 0} contributions
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
