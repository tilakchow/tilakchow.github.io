import React, { useState, useEffect } from 'react';
import { Tooltip } from '../common/Common';
import { FaHeart } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';
import { HiUser, HiQrCode } from 'react-icons/hi2';
import { FaXTwitter } from 'react-icons/fa6';
import { FaFilePdf, FaLinkedin } from 'react-icons/fa';
import { socialLinks } from '../../data/socialLinks';

// Time clock component
const ISTClock: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="hero-section-profile-meta">
      <span className="hero-clock-time">{time}</span>
    </span>
  );
};

export const HeroSection: React.FC = () => {
  const [showQr, setShowQr] = useState(false);

  const toggleQr = () => {
    setShowQr((prev) => !prev);
  };

  const avatarUrl = '/avatar.png';
  // Generates clean email QR code matching Manixh dimensions & style (black QR dots on crisp white rounded card)
  const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=mailto:tilakchowdary18@gmail.com&color=000000&bgcolor=ffffff';

  return (
    <div className="hero-section-banner-outer">
      <div className="hero-section-profile">
        {/* Avatar Wrapper with QR code toggle & clean borderless presentation */}
        <div className="hero-section-avatar-wrapper">
          <div
            className="user-image hero-section-avatar"
            style={{
              overflow: 'hidden',
              borderRadius: '16px',
              backgroundColor: showQr ? '#ffffff' : '#141719',
              padding: showQr ? '10px' : '0px',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}
          >
            <img
              src={showQr ? qrUrl : avatarUrl}
              alt={showQr ? 'Scan QR Code to Email' : 'Tilak Chowdary'}
              style={{
                width: '100%',
                height: '100%',
                objectFit: showQr ? 'contain' : 'cover',
                display: 'block',
                borderRadius: showQr ? '8px' : '12px',
                transition: 'all 0.25s ease',
              }}
            />
            <button
              className="qr-toggle-btn"
              onClick={toggleQr}
              aria-label={showQr ? 'Show Profile Photo' : 'Show Contact QR Code'}
              title={showQr ? 'Show Profile Photo' : 'Show Contact QR Code'}
              style={{
                position: 'absolute',
                top: '6px',
                right: '6px',
                width: '28px',
                height: '28px',
                borderRadius: '50%',
                backgroundColor: showQr ? '#1f1f23' : '#1a1b1c',
                border: '1.5px solid #333',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 10,
                boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
                padding: 0,
              }}
            >
              {showQr ? <HiUser size={15} /> : <HiQrCode size={15} />}
            </button>
          </div>
        </div>

        {/* Profile Info */}
        <div className="hero-section-profile-info">
          <div className="hero-section-profile-main">
            <div className="hero-section-profile-name-row">
              <h1 className="hero-name" style={{ fontSize: '1.6rem', fontWeight: 700, margin: 0 }}>
                Tilak Chowdary{' '}
                <Tooltip text="AI Engineer & Systems Architect" position="right">
                  <span className="heart">
                    <FaHeart color="red" size={18} />
                  </span>
                </Tooltip>
              </h1>
            </div>

            <div className="hero-section-profile-username">
              <a
                href="https://x.com/tilakchow_"
                target="_blank"
                rel="noopener noreferrer"
              >
                @tilakchow_
              </a>
            </div>

            <div className="hero-section-profile-status-row">
              <span
                className="availability-text"
                style={{
                  fontWeight: '600',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  marginLeft: 4,
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                AI Engineer
              </span>
            </div>

            <div className="hero-section-profile-meta-row">
              <span className="hero-section-profile-meta">
                <LuMapPin style={{ marginRight: '4px' }} /> Hyderabad, India
              </span>
              <span className="hero-section-profile-dot">•</span>
              <ISTClock />
            </div>
          </div>
        </div>
      </div>

      {/* About Me & Bio Section */}
      <div className="hero-section container">
        <div className="about-me">
          <div className="about-me-content">
            <ul className="about-bio">
              <li className="about-bio-item">
                <span className="about-bio-marker" />
                <span>
                  Hi, I am an{' '}
                  <span className="bio-highlight">AI Engineer</span> with around 1 year of hands-on experience building GenAI applications.
                </span>
              </li>
              <li className="about-bio-item">
                <span className="about-bio-marker" />
                <span>
                  Experienced in developing{' '}
                  <span className="bio-highlight">LLM-powered systems</span>,{' '}
                  <span className="bio-highlight">retrieval architectures</span>, and{' '}
                  <span className="bio-highlight">agentic workflows</span> using LangChain & LangGraph.
                </span>
              </li>
              <li className="about-bio-item">
                <span className="about-bio-marker" />
                <span>
                  Published and presented research on an{' '}
                  <span className="bio-highlight">IoT-Based Driver Alertness System</span> at the ICISAS 2025 Conference, Dubai.
                </span>
              </li>
            </ul>
          </div>

          <div className="hero-divider" />

          {/* Social Cards (Twitter, LinkedIn, Email & Resume Links) */}
          <div className="community-links">
            <a
              href="https://x.com/tilakchow_"
              target="_blank"
              rel="noopener noreferrer"
              className="twitter-card"
            >
              <div className="twitter-card-left">
                <FaXTwitter className="twitter-icon" />
              </div>
              <div className="twitter-card-middle">
                <span className="twitter-name">Tilak Chowdary</span>
                <span className="twitter-handle">@tilakchow_</span>
              </div>
              <div className="twitter-card-right">
                <span className="twitter-follow-btn">Follow</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/tilakchowdary05"
              target="_blank"
              rel="noopener noreferrer"
              className="discord-invite"
            >
              <div className="discord-invite-left" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FaLinkedin size={24} color="#0a66c2" />
              </div>
              <div className="discord-invite-middle">
                <span className="discord-server-name">Tilak Chowdary</span>
                <span className="discord-server-stats">
                  <span>AI Engineer</span>
                </span>
              </div>
              <div className="discord-invite-right">
                <span className="discord-join-btn">Connect</span>
              </div>
            </a>
          </div>

          <div className="contact-me">
            <Tooltip text="tilakchowdary18@gmail.com" position="top">
              <a href="mailto:tilakchowdary18@gmail.com">
                <button className="contact-btn">
                  <svg
                    height="1em"
                    width="1em"
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: '6px' }}
                  >
                    <g fill="#737373">
                      <path
                        d="M14.75 6H3.25C2.8359 6 2.5 6.3359 2.5 6.75V13.25C2.5 14.7666 3.7334 16 5.25 16H12.75C14.2666 16 15.5 14.7666 15.5 13.25V6.75C15.5 6.3359 15.1641 6 14.75 6Z"
                        fill="#737373"
                        opacity="0.4"
                      />
                      <path
                        d="M2.58841 6.86181C1.73781 6.86181 0.989809 6.23921 0.858909 5.37351L0.634311 3.89061C0.490311 2.93601 1.14941 2.04251 2.10311 1.89791L14.4624 0.0288128C15.4238 -0.111287 16.3105 0.543913 16.4546 1.49801L16.6792 2.98041C16.8232 3.93501 16.1641 4.82811 15.2104 4.97261L2.85101 6.84221C2.76261 6.85541 2.67481 6.86181 2.58841 6.86181Z"
                        fill="#737373"
                      />
                    </g>
                  </svg>
                  Email Me
                </button>
              </a>
            </Tooltip>

            {/* Direct Resume Download Button */}
            <Tooltip text="View / Download AI Engineer Resume" position="top">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-btn"
                style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
              >
                <FaFilePdf size={13} style={{ marginRight: '6px', color: '#f59e0b' }} />
                Resume
              </a>
            </Tooltip>

            <span>|</span>

            <div className="contact-links">
              {socialLinks.map((r, o) => (
                <Tooltip key={o} text={r.name} position="top">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link-btn"
                  >
                    <span className="contact-link-icon">{r.icon}</span>
                  </a>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
