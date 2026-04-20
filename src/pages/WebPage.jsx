import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import RevealWords from "../components/RevealWords";
import Section from "../components/Section";
import { profile } from "../data/profile";
import usePageMetadata from "../hooks/usePageMetadata";

const serviceHighlights = [
  {
    title: "Custom Web Apps",
    description:
      "End-to-end applications for dashboards, portals, reporting, approvals, and data-heavy workflows that need to do real operational work.",
  },
  {
    title: "Internal Tools",
    description:
      "Software for teams that are outgrowing spreadsheets, repeated manual steps, and disconnected systems.",
  },
  {
    title: "Automation & Integrations",
    description:
      "Targeted improvements that reduce duplicate entry, connect existing platforms, and move information where it needs to go automatically.",
  },
];

const deliveryPrinciples = [
  {
    title: "Workflow First",
    description:
      "I start with how the work actually gets done, where people lose time, and what information each role needs to see.",
  },
  {
    title: "Maintainable By Design",
    description:
      "I build with clear data models, practical architecture, and steady iteration so the software stays useful after launch.",
  },
  {
    title: "Built For Real Use",
    description:
      "The goal is less friction, better visibility, and tools your team will actually want to use day to day.",
  },
];

export default function WebPage() {
  usePageMetadata({
    title: "Web Services | Stephen Matheny",
    description:
      "Explore the kinds of web applications, internal tools, and workflow automation solutions Stephen Matheny builds for growing organizations.",
  });

  return (
    <Layout>
      <Reveal as="header" className="surface webHero">
        <RevealWords
          as="p"
          className="webHero__kicker"
          text="Web Services"
        />

        <RevealWords
          as="h1"
          className="webHero__title"
          text="Custom software for growing businesses"
          delay={70}
        />

        <RevealWords
          as="p"
          className="webHero__lead"
          text="I build custom web applications, internal tools, and workflow automations for organizations that need software aligned with real operations."
          delay={120}
        />

        <p className="webHero__support">
          That can mean dashboards, portals, reporting systems, or process
          improvements that replace manual steps with something faster,
          clearer, and easier to maintain over time.
        </p>

        <div className="webHero__actions">
          <a href={`mailto:${profile.email}`} className="btn btn--primary">
            Email Stephen
          </a>
          <Link to="/resume" className="btn">
            View Resume
          </Link>
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </div>
      </Reveal>

      <Section title="What I Build">
        <div className="webOfferGrid">
          {serviceHighlights.map((item) => (
            <article key={item.title} className="surface webOfferCard">
              <h3 className="webOfferCard__title">{item.title}</h3>
              <p className="webOfferCard__description">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="How I Work">
        <div className="webOfferGrid">
          {deliveryPrinciples.map((item) => (
            <article key={item.title} className="surface webOfferCard">
              <h3 className="webOfferCard__title">{item.title}</h3>
              <p className="webOfferCard__description">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
