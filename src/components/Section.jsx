import Reveal from "./Reveal";

export default function Section({ title, children, framed = false }) {
  const bodyClass = framed ? "section__body surface section__body--framed" : "section__body";

  return (
    <Reveal as="section" className="section">
      <div className="section__header">
        <h2 className="section__title">{title}</h2>
      </div>
      <div className={bodyClass}>{children}</div>
    </Reveal>
  );
}
