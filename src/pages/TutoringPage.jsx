import { useState } from "react";

import Layout from "../components/Layout";
import Reveal from "../components/Reveal";
import RevealWords from "../components/RevealWords";
import Section from "../components/Section";
import { profile } from "../data/profile";
import usePageMetadata from "../hooks/usePageMetadata";

const subjectGroups = [
  {
    name: "Foundations",
    items: ["2nd-5th Grade", "Arithmetic", "Fractions", "Pre-Algebra"],
  },
  {
    name: "Middle / High School",
    items: ["6th-8th Grade", "9th-12th Grade", "Algebra I", "Algebra II", "Geometry", "Precalculus", "Statistics"],
  },
  {
    name: "College",
    items: ["Algebra", "Stats", "Trigonometry", "Calculus I"],
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

const testimonials = [
  {
    quote:
      "Stephen helped my daughter go from struggling in algebra to confidently solving problems on her own.",
    reviewer: "Parent of Algebra I student",
    relationship: "Parent",
    rating: 5,
  },
  {
    quote:
      "I never thought I would feel comfortable in math class, but Stephen explains things in a way that actually clicks.",
    reviewer: "High school Geometry student",
    relationship: "Student",
    rating: 5,
  },
  {
    quote:
      "Calculus felt overwhelming at first. After tutoring, I understood the concepts and felt prepared for my exams.",
    reviewer: "College Calculus I student",
    relationship: "Student",
    rating: 5,
  },
];

const contactEmail = profile.email || "stephen@smatheny.com";

const tutoringImages = {
  // A friendly tutoring scene with a student and tutor working on math together.
  hero: "src/assets/images/student-learning-math-with-tutor.png",
  // Professional but friendly photo of Stephen Matheny.
  about: "src/assets/images/stephen-matheny-tutor.jpg",
  // Student studying math with notebook and calculator.
  subjects: "src/assets/images/math-notebook-study.png",
  // Student successfully solving a math problem and smiling.
  whoIHelp: "src/assets/images/student-smiling-after-solving-problem.png",
  // Parent helping student with homework at a table.
  testimonials: "src/assets/images/parent-student-learning.png",
};

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
      "Math tutoring from foundations through Calculus I. Personalized help from former math teacher Stephen Matheny.",
  });

  return (
    <Layout>
      <Reveal as="header" className="surface tutoringHero">
        <div className="tutoringHero__content">
          <RevealWords
            as="p"
            className="tutoringHero__kicker"
            text="Personalized Math Support"
          />

          <RevealWords
            as="h1"
            className="tutoringHero__title"
            text="Math Tutoring That Finally Makes Sense"
            delay={70}
          />

          <RevealWords
            as="p"
            className="tutoringHero__lead"
            text="Personalized math tutoring with Stephen Matheny, former math teacher and software engineer."
            delay={120}
          />

          <p className="tutoringHero__support">
            Helping students build confidence in math from foundational skills
            through Calculus I.
          </p>

          <div className="tutoringHero__actions">
            <a href="#tutoring-booking" className="btn btn--primary">
              Request Tutoring
            </a>
            <a href="#tutoring-booking" className="btn">
              Ask About Tutoring
            </a>
          </div>
        </div>

        <TutoringImage
          className="tutoringHero__image"
          src={tutoringImages.hero}
          alt="A tutor and student working through a math lesson together."
          fallbackLabel="Hero tutoring photo placeholder"
        />
      </Reveal>

      <Section title="About Stephen" framed>
        <div className="tutoringAbout">
          <TutoringImage
            className="tutoringAbout__image"
            src={tutoringImages.about}
            alt="Stephen Matheny smiling in a professional photo."
            fallbackLabel="Profile photo placeholder"
          />

          <div className="tutoringAbout__copy">
            <p>
              <strong>Hi, I&apos;m Stephen Matheny.</strong> I&apos;m a former
              mathematics and computer science teacher and a current software
              engineer.
            </p>

            <p>
              I know how discouraging math can feel when lessons move too fast
              or concepts never quite click. My goal is to make math feel clear,
              manageable, and even enjoyable.
            </p>

            <p>
              I teach with patience, structure, and encouragement so students
              can truly understand what they are learning instead of only
              memorizing steps.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Subjects Offered">
        {/* <div className="tutoringSubjects"> */}
          <div className="tutoringSubjects__groups">
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

          {/* <TutoringImage
            className="tutoringSubjects__image"
            src={tutoringImages.subjects}
            alt="A student notebook with math notes and a calculator."
            fallbackLabel="Subjects illustration placeholder"
          /> */}
        {/* </div> */}
      </Section>

      <Section title="Who I Help">
        <div className="tutoringWho">
          <div className="tutoringWho__content">
            <p>
              Tutoring is for students who need support, structure, and someone
              who will explain math in a way that makes sense.
            </p>

            <ul className="tutoringWho__list">
              {whoIHelp.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <TutoringImage
            className="tutoringWho__image"
            src={tutoringImages.whoIHelp}
            alt="A student smiling after solving a math problem."
            fallbackLabel="Student success photo placeholder"
          />
        </div>
      </Section>

      <Section title="Why My Tutoring Works">
        <div className="tutoringValueGrid">
          {valuePoints.map((point, index) => (
            <Reveal
              as="article"
              key={point.title}
              className="surface tutoringValueCard"
              delay={index * 60}
            >
              <h3 className="tutoringValueCard__title">{point.title}</h3>
              <p className="tutoringValueCard__description">{point.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* <Section title="Testimonials">
        <div className="tutoringTestimonials">
          <div className="tutoringTestimonials__intro">
            <p>
              Families and students deserve to feel supported. Here are a few
              example testimonials showing the kind of progress and confidence
              tutoring can build.
            </p>

            <TutoringImage
              className="tutoringTestimonials__image"
              src={tutoringImages.testimonials}
              alt="A parent helping a student review math homework together."
              fallbackLabel="Parent and student photo placeholder"
            />
          </div>

          <div className="tutoringTestimonials__grid">
            {testimonials.map((item, index) => (
              <Reveal
                as="figure"
                key={item.quote}
                className="surface tutoringTestimonial"
                delay={index * 70}
              >
                <blockquote className="tutoringTestimonial__quote">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <figcaption className="tutoringTestimonial__meta">
                  {item.rating ? (
                    <p
                      className="tutoringTestimonial__rating"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {"★".repeat(item.rating)}
                    </p>
                  ) : null}
                  <p className="tutoringTestimonial__reviewer">{item.reviewer}</p>
                  <p className="tutoringTestimonial__relationship">
                    {item.relationship}
                  </p>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </Section> */}

      <Reveal as="section" className="surface tutoringCTA">
        <RevealWords
          as="h2"
          className="tutoringCTA__title"
          text="Ready to help your student feel confident in math?"
        />
        <p className="tutoringCTA__text">
          Let&apos;s talk about your goals and build a tutoring plan that meets
          your student where they are.
        </p>
        <div className="tutoringCTA__actions">
          <a href="#tutoring-booking" className="btn btn--primary">
            Request Tutoring
          </a>
          <a href="#tutoring-booking" className="btn">
            Ask About Availability
          </a>
        </div>
      </Reveal>

      <Section title="Book Tutoring">
        <div id="tutoring-booking" className="tutoringInquiry">
          <p className="tutoringInquiry__intro">
            Choose a time that works best for you using the booking calendar
            below. If you prefer, you can also email me directly at{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
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
    </Layout>
  );
}
