"use client";

import { useEffect, useMemo, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  location: string;
};

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  interval?: number;
}

export default function TestimonialSlider({
  testimonials,
  interval = 6000,
}: TestimonialSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = useMemo(() => testimonials.filter(Boolean), [testimonials]);

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, interval);

    return () => clearInterval(timer);
  }, [slides.length, interval]);

  if (slides.length === 0) {
    return null;
  }

  const activeSlide = slides[activeIndex];

  return (
    <div className="space-y-6">
      <blockquote className="relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
        <svg
          className="absolute -left-4 -top-4 h-20 w-20 text-brand/10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M9 10h.01" />
          <path d="M15 10h.01" />
          <path d="M7 17c2 0 3.5-1.5 3.5-3.5V7.5A2.5 2.5 0 0 0 8 5H5.5A2.5 2.5 0 0 0 3 7.5V12a5 5 0 0 0 4 5Z" />
          <path d="M17 17c2 0 3.5-1.5 3.5-3.5V7.5A2.5 2.5 0 0 0 18 5h-2.5A2.5 2.5 0 0 0 13 7.5V12a5 5 0 0 0 4 5Z" />
        </svg>
        <p className="text-base leading-relaxed text-slate-700">“{activeSlide.quote}”</p>
        <footer className="mt-6 text-sm font-medium text-slate-900">
          {activeSlide.name} · <span className="text-slate-500">{activeSlide.location}</span>
        </footer>
      </blockquote>

      {slides.length > 1 ? (
        <div className="flex items-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={`${slide.name}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-8 rounded-full transition ${
                index === activeIndex ? "bg-brand" : "bg-slate-200 hover:bg-slate-300"
              }`}
              aria-label={`Show testimonial from ${slide.name}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
