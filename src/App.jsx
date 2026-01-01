import Contact from "./components/Footer";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import Section from "./components/Section";
import Skills from "./components/Skills";
import { profile } from "./data/profile";

import "./App.css";

export default function App() {
  return (
    <Layout>

      <Header
        firstName={profile.firstName}
        lastName={profile.lastName}
        headline={profile.headline}
      />

      <Section title="About" framed>
        <p>{profile.about}</p>
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
