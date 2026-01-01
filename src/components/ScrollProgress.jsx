import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const bar = barRef.current;
    if (!bar) return;

    let frame = null;
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    let prefersReducedMotion = mql.matches;

    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      bar.style.transform = `scaleX(${progress})`;
      frame = null;
    };

    const onScroll = () => {
      if (prefersReducedMotion) {
        update();
        return;
      }
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    const onMotionChange = (event) => {
      prefersReducedMotion = event.matches;
      update();
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    mql.addEventListener("change", onMotionChange);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      mql.removeEventListener("change", onMotionChange);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="progressBar" ref={barRef} aria-hidden="true" />;
}
