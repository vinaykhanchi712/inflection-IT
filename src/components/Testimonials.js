import React, { useEffect, useRef, useState } from "react";
import kws from "../images/clients/userAny.png";
import geps from "../images/clients/userAny.png";
import protergia from "../images/clients/userAny.png";

/*
 Testimonials carousel (more compact + anonymous fallback):
 - Shows square review cards
 - Responsive: 1 / 2 / 3 visible
 - Auto-advances page-by-page
 - Dots indicate pages and are clickable
*/

const sampleReviews = [
  {
    id: 1,
    name: "Rakesh Kalyan",
    role: "CEO Kalyan Enterprise, India",
    avatar: kws,
    text:
      "Fantastic work. The team delivered on time and the product exceeded our expectations. Clear communication and strong technical skills.",
  },
  {
    id: 2,
    name: "Kishu Garg",
    role: "India",
    avatar: protergia,
    text:
      "Highly professional. The project was complex but handled well — architecture and execution were top-notch.",
  },
  {
    id: 3,
    name: "Shresth Gupta",
    role: "Timber corp, India",
    avatar: geps,
    text:
      "Great collaboration and rapid iterations. They understood our needs quickly and shipped valuable features.",
  },
  {
    id: 4,
    name: "Shivani Sharma",
    role: "Product Manager, India",
    avatar: kws,
    text:
      "Reliable partner — strong focus on testing and stability. Reduced our time-to-market significantly.",
  },
  {
    id: 5,
    name: "Alex Stuart",
    role: "Ireland",
    avatar: protergia,
    text:
      "Design + engineering were in sync which made the UX polished and the product intuitive.",
  },
  {
    id: 6,
    name: "Daniel Craig",
    role: "Singapore",
    avatar: geps,
    text:
      "Amazing attention to detail. They turned a vague brief into a working MVP quickly.",
  },
];

export default function Testimonials({ reviews = sampleReviews, autoDelay = 3000 }) {
  const outerRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(3); // 1/2/3 depending on viewport
  const [pageIndex, setPageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const manualPauseRef = useRef(false);

  // compute pages based on visible count
  const pages = Math.max(1, Math.ceil(reviews.length / visibleCount));

  // set visibleCount based on window width (responsive)
  useEffect(() => {
    function updateVisible() {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1); // small screens
      else if (w < 1024) setVisibleCount(2); // medium screens
      else setVisibleCount(3); // large screens
    }
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  // Ensure pageIndex is valid when visibleCount changes
  useEffect(() => {
    setPageIndex((p) => {
      const maxPage = Math.max(0, Math.ceil(reviews.length / visibleCount) - 1);
      return Math.min(p, maxPage);
    });
  }, [visibleCount, reviews.length]);

  // Auto-advance timer
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      if (manualPauseRef.current) return; // temporary pause after manual interaction
      setPageIndex((p) => {
        const next = p + 1;
        return next >= pages ? 0 : next;
      });
    }, autoDelay);
    return () => clearInterval(timer);
  }, [pages, autoDelay, isPaused]);

  // scroll to page when pageIndex changes
  useEffect(() => {
    if (!outerRef.current) return;
    const outer = outerRef.current;
    outer.scrollTo({
      left: pageIndex * outer.clientWidth,
      behavior: "smooth",
    });
  }, [pageIndex, visibleCount]);

  // pause helpers
  const pause = () => {
    setIsPaused(true);
    manualPauseRef.current = true;
  };
  const resume = () => {
    setIsPaused(false);
    clearTimeout(manualPauseRef.timeout);
    manualPauseRef.timeout = setTimeout(() => {
      manualPauseRef.current = false;
    }, 1200);
  };

  // manual dot click
  const goToPage = (i) => {
    pause();
    setPageIndex(i);
  };

  // item style: each slide is exactly 100/visibleCount % width so exactly visibleCount items fit
  const itemWidthPercent = 100 / visibleCount;

  // fallback handler to anonymous if avatar fails to load
  const handleAvatarError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = kws;
  };

  return (
    <div className="mt-6 bg-gray-100 py-6">
      <section data-aos="fade-up" className="max-w-4xl mx-auto px-4">
        <div className="my-3 py-2 text-center">
          <h2 className="my-2 text-2xl md:text-3xl text-blue-900 uppercase font-bold">Testimonials</h2>
          <div className="flex justify-center">
            <div className="w-20 border-b-4 border-blue-900" />
          </div>
          <p className="mt-3 text-lg md:text-xl font-medium text-blue-900">
            See what people have to say about us
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocus={pause}
          onBlur={resume}
        >
          {/* viewport */}
          <div
            ref={outerRef}
            className="overflow-hidden"
            aria-roledescription="carousel"
            aria-label="Client testimonials"
          >
            {/* inner flex strip */}
            <div className="flex transition-all duration-400 ease-in-out">
              {reviews.map((r) => (
                <div
                  key={r.id}
                  className="p-2"
                  style={{
                    minWidth: `${itemWidthPercent}%`,
                    boxSizing: "border-box",
                  }}
                >
                  {/* Card (compact) */}
                  <article className="bg-white rounded-lg shadow-sm p-2 h-full flex flex-col items-stretch">
                    {/* smaller square avatar area */}
                    <div
                      style={{ width: "100%", position: "relative", paddingTop: "72%" }}
                      className="mb-2 rounded overflow-hidden bg-gray-50"
                    >
                      <img
                        src={r.avatar || kws}
                        alt={`${r.name} avatar`}
                        className="absolute inset-0 w-full h-full object-contain"
                        loading="lazy"
                        onError={handleAvatarError}
                      />
                    </div>

                    <div className="flex-1">
                      <p className="text-gray-700 text-sm leading-snug mb-2">{r.text}</p>
                    </div>

                    <div className="mt-3">
                      <div className="text-blue-900 font-semibold text-sm">{r.name}</div>
                      <div className="text-xs text-gray-500">{r.role}</div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* dots (small) */}
          <div className="flex justify-center mt-3">
            {Array.from({ length: pages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx)}
                className={`w-2.5 h-2.5 mx-1 rounded-full transition-colors duration-200 ${idx === pageIndex ? "bg-blue-900" : "bg-gray-300"}`}
                aria-label={`Go to testimonials page ${idx + 1}`}
                aria-pressed={idx === pageIndex}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}