import Section from "./components/Section";
import Projects from "./components/Projects";
import { profile } from "./data/profile";

import "./App.css";

export default function App() {
  return (
    <>
      Hello, {profile.firstName} {profile.lastName}

      <Section title="Projects">
        <Projects projects={profile.projects} />
      </Section>
    </>
  )
}

