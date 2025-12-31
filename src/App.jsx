import Contact from "./components/Contact";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Projects from "./components/Projects";
import Section from "./components/Section";
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

      <Section title="About">
        <p>{profile.about}</p>
      </Section>


      <Section title="Projects">
        <Projects projects={profile.projects} />
      </Section>

      <Section title="Contact">
        <Contact links={profile.links} />
      </Section>

    </Layout>
  );
}
