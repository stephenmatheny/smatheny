import { Link } from "react-router-dom";

import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import RevealWords from "../components/RevealWords";
import Section from "../components/Section";
import usePageMetadata from "../hooks/usePageMetadata";

const quickFacts = [
  {
    label: "Former math and computer science teacher",
    text: "Years of classroom experience helping students who felt stuck or overwhelmed.",
  },
  {
    label: "Certified educator",
    text: "Structured, patient instruction that meets students where they are.",
  },
  {
    label: "Local support",
    text: "In-person tutoring in Lufkin and surrounding areas.",
  },
  {
    label: "Web-developer",
    text: "Custom websites and tools that help local businesses attract customers and run more efficiently.",
  },
];

const aboutImage = "/images/stephen-matheny-tutor.jpg";

export default function AboutPage() {
  usePageMetadata({
    title: "About Me | Stephen Matheny",
    description:
      "Learn more about Stephen Matheny, a former teacher, software engineer, and private math tutor serving Lufkin and surrounding areas.",
  });

  return (
    <Layout>

      <Section title="About Me" framed>
        <div className="aboutProfile">
          <figure className="tutoringImage aboutProfile__image">
            <img
              src={aboutImage}
              alt="Stephen Matheny smiling in a professional photo."
              loading="lazy"
            />
          </figure>

          <div className="aboutProfile__content">
            <p>
              <strong>Hi, I&apos;m Stephen Matheny.</strong> I&apos;m a former
              mathematics and computer science teacher, a current software
              engineer and private tutor.
            </p>

            <p>
              I know how discouraging math can feel when lessons move too fast
              or concepts never quite click. My goal is to make math feel
              clear, manageable, and even enjoyable.
            </p>

            <p>
              I teach with patience, structure, and encouragement so students
              can truly understand what they are learning instead of only
              memorizing steps.
            </p>

            <div className="aboutFactGrid">
              {quickFacts.map((fact) => (
                <article key={fact.label} className="aboutFact">
                  <p className="aboutFact__label">{fact.label}</p>
                  <p className="aboutFact__text">{fact.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
