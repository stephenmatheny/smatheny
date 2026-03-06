import { createElement, useEffect, useMemo, useRef } from "react";

function splitWords(text) {
  // Keep spaces as separate tokens so spacing stays identical
  return text.split(/(\s+)/).filter(Boolean);
}

export default function RevealWords({
  as: Component = "span",
  text = "",
  className = "",
  delay = 0,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof window === "undefined") return;

    const show = () => node.classList.add("is-visible");
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = mql.matches;

    if (delay) node.style.setProperty("--reveal-delay", `${delay}ms`);

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    const handleMotionChange = (event) => {
      prefersReducedMotion = event.matches;
      if (prefersReducedMotion) {
        show();
        observer.disconnect();
      }
    };

    mql.addEventListener("change", handleMotionChange);

    return () => {
      observer.disconnect();
      mql.removeEventListener("change", handleMotionChange);
    };
  }, [delay]);

  const tokens = useMemo(() => splitWords(text), [text]);

  const classes = className
    ? `reveal reveal-words ${className}`
    : "reveal reveal-words";
  const elementProps = { className: classes, ...props };

  if (typeof Component === "string") {
    elementProps.ref = ref;
  }

  return createElement(
    Component,
    elementProps,
    tokens.map((tok, idx) =>
      tok.trim() === "" ? (
        // preserve spaces
        <span key={`s-${idx}`}>{tok}</span>
      ) : (
        <span key={`w-${idx}`} className="word" style={{ "--i": idx }}>
          {tok}
        </span>
      )
    )
  );
}
