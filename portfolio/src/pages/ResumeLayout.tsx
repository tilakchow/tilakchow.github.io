import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from '../components/common/Common';
import { Footer } from '../components/footer/Footer';
import { FaDownload, FaArrowLeft } from 'react-icons/fa';
import './ResumeLayout.css';

const RESUME_URL = '/resume.pdf';
const MOBILE_QUERY = '(max-width: 700px)';
const DEFAULT_ASPECT = 612 / 792;
const EXTRA_PADDING = 44;

interface PdfMeta {
  pageCount: number;
  aspectRatio: number;
}

function parsePdfMeta(buffer: ArrayBuffer): PdfMeta {
  try {
    const text = new TextDecoder('latin1').decode(buffer);
    const pages = text.match(/\/Type\s*\/Page[^s]/g);
    const mediaBox = text.match(/\/MediaBox\s*\[\s*0\s+0\s+([\d.]+)\s+([\d.]+)\s*\]/);
    return {
      pageCount: pages ? Math.max(1, pages.length) : 1,
      aspectRatio: mediaBox ? Number(mediaBox[1]) / Number(mediaBox[2]) : DEFAULT_ASPECT,
    };
  } catch {
    return { pageCount: 1, aspectRatio: DEFAULT_ASPECT };
  }
}

const ResumeViewer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [iframeHeight, setIframeHeight] = useState<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    let meta: PdfMeta = { pageCount: 1, aspectRatio: DEFAULT_ASPECT };

    const updateHeight = () => {
      if (cancelled) return;
      const width = container.clientWidth;
      if (width > 0) {
        setIframeHeight((width / meta.aspectRatio) * meta.pageCount + EXTRA_PADDING);
      }
    };

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(container);
    updateHeight();

    fetch(RESUME_URL)
      .then((res) => res.arrayBuffer())
      .then((buf) => {
        if (!cancelled) {
          meta = parsePdfMeta(buf);
          updateHeight();
        }
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div className="resume-viewer" ref={containerRef}>
      <iframe
        src={RESUME_URL}
        title="Tilak Chowdary Resume PDF"
        className="resume-iframe"
        style={iframeHeight !== null ? { height: `${iframeHeight}px` } : undefined}
      />
    </div>
  );
};

export const ResumeLayout: React.FC = () => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_QUERY).matches
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return (
    <div className="resume-layout">
      <div className="resume-container standard-container">
        <SectionTitle>/resume</SectionTitle>
        <p className="resume-description">
          My resume — view it inline below or download a copy.
        </p>

        <div className="resume-actions">
          <a
            href={RESUME_URL}
            download="Tilak_Chowdary_Resume.pdf"
            className="resume-download-btn"
            aria-label="Download resume PDF"
          >
            <FaDownload className="resume-download-icon" />
            <span>Download PDF</span>
          </a>
        </div>

        {isMobile ? (
          <div className="resume-mobile-fallback">
            <p className="resume-mobile-note">
              Inline PDF preview isn't reliable on smaller screens, so I've swapped it for a direct link. Open or download the PDF below.
            </p>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-mobile-btn"
            >
              View / Download PDF
            </a>
          </div>
        ) : (
          <ResumeViewer />
        )}

        <div className="resume-nav">
          <Link to="/" className="resume-nav-btn" aria-label="back to home">
            <FaArrowLeft className="arrow-icon" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResumeLayout;
