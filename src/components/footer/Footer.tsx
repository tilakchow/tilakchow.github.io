import React, { useState, useEffect } from 'react';

const currentYear = new Date().getFullYear();

function getIstTime() {
  const d = new Date();
  return `${new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(d)} IST`;
}

export const Footer: React.FC = () => {
  const [time, setTime] = useState(() => getIstTime());

  useEffect(() => {
    const timer = setInterval(() => setTime(getIstTime()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-quote">
          "I am not a person who sits and complains. I just look at ways to improve."
        </div>
        <div className="footer-info">
          <div className="footer-made">Designed &amp; Made with ❤️</div>
          <div className="footer-bottom">
            <span className="footer-copyright">
              {currentYear}. All rights reserved
            </span>
            <span className="footer-visitors">{time}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
