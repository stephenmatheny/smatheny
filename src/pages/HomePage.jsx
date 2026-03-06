import About from "../components/About";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Section from "../components/Section";
import Skills from "../components/Skills";
import { profile } from "../data/profile";
import usePageMetadata from "../hooks/usePageMetadata";

export default function HomePage() {
  usePageMetadata({
    title: "Stephen Matheny — Software Engineer",
    description:
      "Stephen Matheny is a software engineer and founder of Solutions Arkitect, building full-stack web applications and workflow automation tools for education and enterprise.",
  });

  return (
    <Layout>
      <Header profile={profile} />

      <Section title="About" framed>
        <About />
      </Section>

      <Section title="Skills">
        <Skills skillGroups={profile.skillGroups} />
      </Section>

      <Section title="Experience">
        <Experience items={profile.experience} />
      </Section>

      <Section title="Projects">
        <Projects projects={profile.projects} />
      </Section>
    </Layout>
  );
}
