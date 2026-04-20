import { useState } from "react";

import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { profile } from "../data/profile";
import usePageMetadata from "../hooks/usePageMetadata";

const subjectGroups = [
  {
    name: "Elementary",
    items: ["K-5th Grade", "Arithmetic", "Fractions", "Pre-Algebra"],
  },
  {
    name: "Middle & High School",
    items: [
      "6th-8th Grade",
      "Algebra I",
      "Geometry",
      "Algebra II",
      "Precalculus",
      "Statistics",
    ],
  },
  {
    name: "College",
    items: ["College Algebra", "Trigonometry", "Statistics", "Calculus"],
  },
  {
    name: "Computers",
    items: ["Basics: Docs, Sheets, etc", "Beginner Web Development: HTML, CSS, Javascript", "Advanced Web Development: React, Laravel, SQL", "Computer Aided Design (CAD)"],
  },
];

const whoIHelp = [
  "Students struggling with math",
  "Students who need stronger foundations",
  "Students preparing for quizzes or exams",
  "Students needing help with homework",
  "Students wanting to gain confidence in math",
];

const valuePoints = [
  {
    title: "Teach For Understanding",
    description: "Students learn why math works, not just what steps to memorize.",
  },
  {
    title: "Build Confidence",
    description:
      "Math anxiety is real. We work in a calm, encouraging way that helps students trust themselves.",
  },
  {
    title: "Personalized Approach",
    description:
      "Every student learns differently, so each session is adjusted to match the student's pace and needs.",
  },
  {
    title: "Real-World Perspective",
    description:
      "My engineering background helps connect math ideas to practical examples students can relate to.",
  },
];

const tutoringImages = {
  hero: "/images/tutoring-hero.svg",
};

const contactEmail = profile.email || "stephen@smatheny.com";

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7.8 12.6l2.7 3.2 5.8-9.1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TutoringImage({ src, alt, fallbackLabel, className = "" }) {
  const [isMissing, setIsMissing] = useState(false);
  const classes = className ? `tutoringImage ${className}` : "tutoringImage";

  return (
    <figure className={classes}>
      {isMissing ? (
        <div className="tutoringImage__fallback" role="img" aria-label={alt}>
          <span>{fallbackLabel}</span>
        </div>
      ) : (
        <img src={src} alt={alt} loading="lazy" onError={() => setIsMissing(true)} />
      )}
    </figure>
  );
}

export default function TutoringPage() {
  usePageMetadata({
    title: "Math Tutoring | Stephen Matheny",
    description:
      "Private math tutoring with Stephen Matheny for Lufkin and surrounding areas, from elementary foundations through Calculus.",
  });

  return (
    <Layout pageClassName="page--tutoring">
      <div className="tutoringPage">
        <Reveal as="header" className="tutoringHero">
          <TutoringImage
            className="tutoringHero__art"
            src={tutoringImages.hero}
            alt="Stephen Matheny tutoring hero graphic."
            fallbackLabel="Tutoring hero graphic"
          />

          <div className="tutoringBillboard__actions tutoringHero__actions">
            <a href="#tutoring-booking" className="btn btn--primary">
              Book Now
            </a>
            <a href={`mailto:${contactEmail}`} className="btn">
              Email Me
            </a>
          </div>
        </Reveal>

        <Section title="Subjects Offered">
          <div className="tutoringSubjectGrid">
            {subjectGroups.map((group, index) => (
              <Reveal
                as="article"
                key={group.name}
                className="surface tutoringSubjectCard"
                delay={index * 70}
              >
                <h3 className="tutoringSubjectCard__title">{group.name}</h3>
                <ul className="tutoringSubjectCard__list">
                  {group.items.map((item) => (
                    <li key={`${group.name}:${item}`}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <p className="tutoringSectionNote">
            Need help in a subject not listed above? I collaborate with certified educators to provide high-quality support across additional subjects. Feel free to email me, and I will get you connected with the right tutor.
          </p>

          <a href={`mailto:${contactEmail}`} className="btn">
            Email Me
          </a>
        </Section>

        <Section title="Book a Session" framed>
          <div id="tutoring-booking" className="tutoringInquiry">
            <p className="tutoringInquiry__intro">
              Choose a time that works best for you using the booking calendar below. If you prefer, you can also email me directly below.

              <a href={`mailto:${contactEmail}`} className="btn">
                Email Me
              </a>
            </p>

            <div className="tutoringInquiry__embed">
              <iframe
                className="tutoringInquiry__iframe"
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2D3Q3n1pwzlH_M1qA_88QozptO9yIHW_T-hN0D3xIULvuR88pE8H5DceCI878gvIL1Jk-93PXa?gv=true"
                width="100%"
                height="920"
                frameBorder="0"
                title="Google Calendar appointment scheduling"
              />
            </div>
          </div>
        </Section>



        <Section title="How I Help">
          <div className="tutoringSupportLayout">

            <div className="tutoringValueGrid">
              {valuePoints.map((point, index) => (
                <Reveal
                  as="article"
                  key={point.title}
                  className="surface tutoringValueCard"
                  delay={index * 60}
                >
                  <h3 className="tutoringValueCard__title">{point.title}</h3>
                  <p className="tutoringValueCard__description">
                    {point.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
        
            <a href="#tutoring-booking" className="btn btn--primary">
              Book Now
            </a>
      </div>
    </Layout>
  );
}
