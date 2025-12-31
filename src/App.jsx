import Section from "./components/Section";
import { profile } from "./data/profile";

import "./App.css";

export default function App() {
  return (
    <>
      Hello, {profile.firstName} {profile.lastName}

      <Section title="Title">
        <p>Test</p>
      </Section>
    </>
  )
}

