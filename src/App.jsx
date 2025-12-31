import Header from "./components/Header";
import Projects from "./components/Projects";
import Section from "./components/Section";
import { profile } from "./data/profile";

import "./App.css";

export default function App() {
  return (
    <>
      <Header
        firstName={profile.firstName}
        lastName={profile.lastName}
        headline={profile.headline}
        links={profile.links}
      />

      <Section title="Projects">
        <Projects projects={profile.projects} />
      </Section>
    </>
  );
}
