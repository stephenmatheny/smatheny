import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import RevealWords from "../components/RevealWords";
import Section from "../components/Section";
import usePageMetadata from "../hooks/usePageMetadata";

const focusAreas = [
  {
    title: "Software Engineer",
    description:
      "I build maintainable web applications, internal tools, and workflow systems that solve real business problems.",
  },
  {
    title: "Math Tutor",
    description:
      "I offer patient, structured tutoring that helps students build understanding and confidence in math.",
  },
  {
    title: "Growing Hub",
    description:
      "This site brings together my experience, services, and projects in one place, with more sections to come over time.",
  },
];

const pathways = [
  {
    label: "Resume",
    title: "Background, experience, and projects",
    description:
      "View my resume-style portfolio, engineering experience, and selected project work.",
    to: "/resume",
    cta: "Open resume",
  },
  {
    label: "Tutoring",
    title: "Personalized math support",
    description:
      "Learn about my tutoring approach, the students I help, and how families can get in touch.",
    to: "/tutoring",
    cta: "Explore tutoring",
  },
  {
    label: "Web Services",
    title: "Business software and web apps",
    description:
      "See the kinds of web applications, internal tools, and automation solutions I build.",
    to: "/web",
    cta: "View web services",
  },
];

export default function HomePage() {
  usePageMetadata({
    title: "Stephen Matheny | Builder, Tutor, and Problem Solver",
    description:
      "Stephen Matheny builds web applications and software tools for growing organizations, offers math tutoring, and uses this site as a hub for his work and experience.",
  });

  return (
    <Layout>
      <Reveal as="header" className="surface hubHero">
        <div className="hubHero__content">
          <RevealWords
            as="p"
            className="hubHero__kicker"
            text="Welcome to the hub"
          />

          <RevealWords
            as="h1"
            className="hubHero__title"
            text="Builder, Tutor, and Problem Solver"
            delay={70}
          />

          <RevealWords
            as="p"
            className="hubHero__lead"
            text="I build web apps and software tools that help businesses grow, offer math tutoring, and use this site as a central place for my work and experience."
            delay={120}
          />

          <p className="hubHero__support">
            Choose a path below to explore the area that brought you here, then
            use the site to move between the different things I do.
          </p>

          <div className="hubHero__actions">
            <Link to="/resume" className="btn btn--primary">
              View Resume
            </Link>
            <Link to="/tutoring" className="btn">
              Explore Tutoring
            </Link>
            <Link to="/web" className="btn">
              Web Services
            </Link>
          </div>
        </div>

        <div className="hubHero__panel">
          <p className="hubHero__panelLabel">What you&apos;ll find here</p>

          <div className="hubHero__panelGrid">
            {focusAreas.map((item) => (
              <article key={item.title} className="hubHero__panelCard">
                <h2 className="hubHero__panelCardTitle">{item.title}</h2>
                <p className="hubHero__panelCardText">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      <Section title="Who I Am" framed>
        <div className="hubSummary">
          <p>
            I&apos;m Stephen Matheny, a software engineer and builder focused on
            practical tools that help organizations operate more effectively and
            grow with confidence.
          </p>

          <p>
            My background also includes years in education, which shapes the
            way I teach, communicate, and support students through math
            tutoring. This site is designed as a central dashboard for those
            different areas of my work.
          </p>
        </div>
      </Section>

      <Section title="Explore the Site">
        <div className="hubPathGrid">
          {pathways.map((item) => (
            <Link key={item.to} to={item.to} className="surface hubPathCard">
              <p className="hubPathCard__label">{item.label}</p>
              <h3 className="hubPathCard__title">{item.title}</h3>
              <p className="hubPathCard__description">{item.description}</p>
              <div className="hubPathCard__meta">
                <span>{item.cta}</span>
                <span className="hubPathCard__arrow" aria-hidden="true">
                  &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="hubPathways__note">
          This site is meant to be a living hub, so additional sections and
          services can be added over time without changing the way visitors
          navigate it.
        </p>
      </Section>
    </Layout>
  );
}
