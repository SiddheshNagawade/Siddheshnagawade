"use client"

import ColdFlameDrift from "@/components/ui/cold-flame-drift"

const mono = "ui-monospace, 'SF Mono', Menlo, Monaco, Consolas, monospace"
const serif = "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif"

export default function Demo() {
  return (
    <ColdFlameDrift
      palette="ember"
      angle={42}
      scale={52}
      speed={3.5}
      grain={0.58}
      forks={0.48}
      turbulence={0.4}
      interactive={true}
      height="100dvh"
      aria-label="Animated ember flame field"
    >
      <div className="portfolio-overlay">
        {/* Left side: Build in progress */}
        <div className="build-status-wrapper">
          <h2 className="build-status-title">
            Build in progress
          </h2>
        </div>

        {/* Right side: Siddhesh Nagawade Product design Portfolio */}
        <div className="author-wrapper">
          <h1 className="author-name">
            Siddhesh
            <br />
            Nagawade
          </h1>
          <p className="author-role">
            Product design Portfolio
          </p>
        </div>
      </div>

      <style>{`
        .portfolio-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: clamp(28px, 5vw, 64px);
          background: 
            radial-gradient(circle at bottom right, rgba(8, 3, 2, 0.45) 0%, rgba(8, 3, 2, 0) 65%),
            linear-gradient(to right, rgba(8, 3, 2, 0.65) 0%, rgba(8, 3, 2, 0.1) 45%, rgba(8, 3, 2, 0.55) 100%);
          color: #fdf4ec;
          pointer-events: none;
        }

        @media (min-width: 768px) {
          .portfolio-overlay {
            flex-direction: row;
            align-items: flex-end;
          }
        }

        .build-status-wrapper {
          min-width: 0;
          pointer-events: auto;
          padding-bottom: clamp(0px, 1.5vw, 16px);
        }

        .build-status-title {
          margin: 0;
          font-family: ${mono};
          font-size: clamp(26px, 3.6vw, 48px);
          font-weight: 600;
          letterSpacing: -0.02em;
          line-height: 1.15;
          color: #ff9238;
          text-shadow: 0 4px 28px rgba(0, 0, 0, 0.85);
        }

        .author-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
          min-width: 0;
          pointer-events: auto;
        }

        .author-name {
          margin: 0;
          font-family: ${serif};
          font-style: italic;
          font-weight: 400;
          font-size: clamp(48px, 8.5vw, 130px);
          line-height: 0.9;
          letter-spacing: -0.03em;
          color: #fdf4ec;
          text-shadow: 0 4px 48px rgba(0, 0, 0, 0.9);
        }

        .author-role {
          margin: clamp(14px, 1.8vw, 24px) 0 0;
          font-family: ${mono};
          font-size: clamp(12px, 1.3vw, 17px);
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #ff9238;
          font-weight: 500;
          opacity: 0.95;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.85);
        }
      `}</style>
    </ColdFlameDrift>
  )
}
