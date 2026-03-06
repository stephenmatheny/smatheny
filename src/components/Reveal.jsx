import { createElement, useEffect, useRef } from "react";

export default function Reveal({
  as: Component = "div",
  children,
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

    if (delay) {
      node.style.setProperty("--reveal-delay", `${delay}ms`);
    }

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

  const classes = className ? `reveal ${className}` : "reveal";
  const elementProps = { className: classes, ...props };

  if (typeof Component === "string") {
    elementProps.ref = ref;
  }

  return createElement(Component, elementProps, children);
}
