import Reveal from "./Reveal";
import RevealWords from "./RevealWords";

export default function Section({ title, children, framed = false, ...props }) {
  const bodyClass = framed ? "section__body surface section__body--framed" : "section__body";

  return (
    <Reveal as="section" className="section" {...props}>
      <div className="section__header">
        <RevealWords as="h2" className="section__title" text={title} />
      </div>
      <div className={bodyClass}>{children}</div>
    </Reveal>
  );
}
