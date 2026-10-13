"use client"

import { GradientBackground } from "@/components/ui/oceanic-shimmer"

export default function Demo() {
  return (
    <main className="relative h-screen w-screen overflow-hidden select-none">
      {/* Oceanic Shimmer Background */}
      <GradientBackground className="absolute inset-0 h-full w-full" />

      {/* Atmospheric Contrast & Depth Vignette */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 85% 90%, rgba(10, 24, 48, 0.5) 0%, rgba(10, 24, 48, 0) 65%), " +
            "radial-gradient(ellipse at 15% 90%, rgba(10, 24, 48, 0.6) 0%, rgba(10, 24, 48, 0) 60%), " +
            "linear-gradient(to top, rgba(7, 20, 42, 0.75) 0%, rgba(7, 20, 42, 0.15) 45%, rgba(7, 20, 42, 0) 100%)",
        }}
      />

      {/* Main Content Overlay */}
      <div className="portfolio-overlay">
        {/* Left Side: Build in progress */}
        <div className="build-status-wrapper">
          <h2 className="build-status-title">
            Build in progress
          </h2>
        </div>

        {/* Right Side: Siddhesh Nagawade Product design Portfolio */}
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
          padding: clamp(32px, 5.5vw, 76px);
          color: #ffffff;
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
          padding-bottom: clamp(0px, 1.2vw, 14px);
        }

        .build-status-title {
          margin: 0;
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: clamp(30px, 4.4vw, 62px);
          font-weight: 700;
          letter-spacing: -0.035em;
          line-height: 1.08;
          color: #f1f8fc;
          text-shadow: 0 4px 32px rgba(10, 32, 64, 0.85);
        }

        .author-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
          min-width: 0;
          pointer-events: auto;
        }

        @media (max-width: 767px) {
          .author-wrapper {
            align-items: flex-start;
            text-align: left;
          }
        }

        .author-name {
          margin: 0;
          font-family: 'Playfair Display', Georgia, Cambria, serif;
          font-style: italic;
          font-weight: 500;
          font-size: clamp(52px, 9.2vw, 142px);
          line-height: 0.88;
          letter-spacing: -0.035em;
          color: #ffffff;
          text-shadow: 0 8px 56px rgba(5, 18, 40, 0.95);
        }

        .author-role {
          margin: clamp(14px, 1.8vw, 24px) 0 0;
          font-family: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace;
          font-size: clamp(12px, 1.35vw, 17px);
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #8bd3f2;
          font-weight: 500;
          opacity: 0.95;
          text-shadow: 0 2px 24px rgba(10, 40, 80, 0.9);
        }
      `}</style>
    </main>
  )
}
