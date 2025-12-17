'use client';

import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type GlobeShowcaseSlide = {
  title: string;
  subtitle: string;
  description: string;
  img: string;
};

export function GlobeShowcase({ slides }: { slides: GlobeShowcaseSlide[] }) {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const setActiveSlide = useCallback(() => {
    const container = sliderRef.current;
    if (!container) return;
    const children = Array.from(container.children) as HTMLElement[];

    children.forEach((child) => {
      child.classList.remove("is-active", "is-animating");
    });

    const active = (children[1] as HTMLElement | undefined) ?? children[0];
    if (!active) return;

    active.classList.add("is-active");

    // restart text animation
    active.classList.remove("is-animating");
    void active.offsetWidth;
    active.classList.add("is-animating");
  }, []);

  const handleNext = useCallback((steps = 1) => {
    const container = sliderRef.current;
    if (!container) return;
    const children = container.children;
    if (children.length <= 1) return;

    const normalized =
      ((steps % children.length) + children.length) % children.length;

    for (let i = 0; i < normalized; i += 1) {
      const first = container.firstElementChild;
      if (first) container.appendChild(first);
    }

    setActiveSlide();
  }, []);

  const handlePrev = useCallback(() => {
    const container = sliderRef.current;
    if (!container) return;
    const children = container.children;
    if (children.length <= 1) return;

    const last = container.lastElementChild;
    if (last) container.prepend(last);

    setActiveSlide();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") handleNext(1);
      if (event.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [handleNext, handlePrev]);

  useEffect(() => {
    setActiveSlide();
  }, [slides, setActiveSlide]);

  if (!slides.length) return null;

  return (
    <div className="ge-shell lg:col-span-2">
      <div className="ge-stage">
        <div className="ge-slide" id="ge-slide" ref={sliderRef}>
          {slides.map((slide, position) => {
            const isCard = position >= 2 && position <= 5;
            const jumpSteps = position - 1;
            const isOffstage = position >= 6;

            return (
              <button
                key={slide.title + position}
                type="button"
                className="ge-item"
                style={{ backgroundImage: `url(${slide.img})` }}
                onClick={isCard ? () => handleNext(jumpSteps) : undefined}
                disabled={!isCard}
                aria-hidden={isOffstage}
                tabIndex={isOffstage ? -1 : undefined}
                aria-label={
                  isCard ? `Go to ${slide.title}` : `${slide.title} background`
                }
              >
                <span className="sr-only">{slide.title}</span>

                <div className="ge-content">
                  <p className="ge-subtitle">{slide.subtitle}</p>
                  <h3 className="ge-headline">{slide.title}</h3>
                  <p className="ge-description">{slide.description}</p>
                  <span className="ge-cta">See more</span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="ge-controls">
          <button className="ge-control-btn" onClick={handlePrev} type="button">
            <ChevronLeft className="ge-control-icon" />
          </button>
          <button
            className="ge-control-btn"
            onClick={() => handleNext(1)}
            type="button"
          >
            <ChevronRight className="ge-control-icon" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .ge-shell {
          position: relative;
          width: 100%;
          min-height: 86vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: clamp(20px, 4vh, 40px) 0;
          background: #111;
          color: #fff;
          border-radius: 1.4rem;
          isolation: isolate;
          --ge-base-bottom: clamp(2.5rem, 6vh, 3.5rem);
        }

        .ge-stage {
          position: relative;
          width: min(1000px, 92vw);
          height: min(600px, 70vh);
          overflow: hidden;
          margin: 0 auto;
        }

        .ge-slide {
          position: relative;
          width: max-content;
          height: 100%;
          margin-top: 50px;
        }

        .ge-item {
          appearance: none;
          border: none;
          padding: 0;
          font: inherit;
          color: inherit;
          background-color: transparent;
          text-align: left;
          display: inline-block;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(0, -50%);
          width: 200px;
          height: 300px;
          background-position: 50% 50%;
          background-size: cover;
          border-radius: 20px;
          box-shadow: 0 30px 50px #505050;
          cursor: pointer;
          transition: 0.5s;
          overflow: hidden;
          z-index: 1;
        }

        .ge-item[disabled] {
          cursor: default;
        }

        .ge-item:nth-child(1),
        .ge-item:nth-child(2) {
          left: 0;
          top: 0;
          bottom: auto;
          transform: translate(0, 0);
          width: 100%;
          height: 100%;
          border-radius: 0;
          border: none;
          box-shadow: none;
          cursor: default;
          z-index: 1;
        }

        .ge-item:nth-child(2) {
          z-index: 2;
        }

        .ge-item:nth-child(3) {
          left: 50%;
        }

        .ge-item:nth-child(4) {
          left: calc(50% + 220px);
        }

        .ge-item:nth-child(5) {
          left: calc(50% + 440px);
        }

        .ge-item:nth-child(n + 6) {
          left: calc(50% + 660px);
          opacity: 0;
          pointer-events: none;
        }

        .ge-controls {
          position: absolute;
          bottom: clamp(2.25rem, 6vh, 3rem);
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 20px;
          z-index: 20;
        }

        .ge-control-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.35);
          background: transparent;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .ge-control-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.35);
          color: #111;
        }

        .ge-control-icon {
          width: 18px;
          height: 18px;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .ge-content {
          position: absolute;
          top: 50%;
          left: 100px;
          width: 340px;
          text-align: left;
          padding: 0;
          color: #eee;
          transform: translate(0, -50%);
          display: none;
          font-family: var(--font-manrope, "Manrope", system-ui, -apple-system);
          pointer-events: none;
        }

        .ge-item.is-active .ge-content {
          display: block;
          z-index: 5;
        }

        .ge-subtitle,
        .ge-headline,
        .ge-description,
        .ge-cta {
          opacity: 0;
          transform: translate(0, 100px);
          filter: blur(33px);
        }

        .ge-subtitle {
          font-size: 0.8rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #dcb158;
        }

        .ge-headline {
          font-size: clamp(2.4rem, 3.4vw, 3.6rem);
          font-weight: 700;
          text-transform: uppercase;
          margin: 14px 0 10px;
        }

        .ge-description {
          margin: 0 0 18px;
          font-size: 0.98rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.75);
        }

        .ge-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 18px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.25);
          background: rgba(255, 255, 255, 0.08);
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fff;
        }

        .ge-item.is-animating .ge-subtitle {
          animation: showcontent 1s ease-in-out 0s forwards;
        }
        .ge-item.is-animating .ge-headline {
          animation: showcontent 1s ease-in-out 0.3s forwards;
        }
        .ge-item.is-animating .ge-description {
          animation: showcontent 1s ease-in-out 0.6s forwards;
        }
        .ge-item.is-animating .ge-cta {
          animation: showcontent 1s ease-in-out 0.9s forwards;
        }

        @keyframes showcontent {
          from {
            opacity: 0;
            transform: translate(0, 100px);
            filter: blur(33px);
          }
          to {
            opacity: 1;
            transform: translate(0, 0);
            filter: blur(0);
          }
        }

        @media (max-width: 1024px) {
          .ge-item:not(:nth-child(1)):not(:nth-child(2)) {
            display: none;
          }

          .ge-controls {
            bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
