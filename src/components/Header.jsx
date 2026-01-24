import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import RevealWords from "./RevealWords";

export default function Header({ profile }) {
  const [copied, setCopied] = useState(false);

  const links = useMemo(() => {
    const map = {};
    for (const link of profile?.links ?? []) {
      if (link?.text) map[link.text.toLowerCase()] = link.value;
    }
    return map;
  }, [profile]);

  const email = profile?.email ?? links.email;
  const github = links.github;
  const linkedIn = links.linkedin;

  const handleCopyEmail = async () => {
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // fail silently; copy is a convenience, not critical
    }
  };

  return (
    <Reveal as="header" className="surface hero">
      <RevealWords
        as="h1"
        className="hero__name"
        text={`${profile.firstName} ${profile.lastName}`}
      />

      <RevealWords
        as="p"
        className="hero__headline"
        text={profile.headline}
        delay={90}
      />

      <div className="hero__actions">
        <a
          href="/Stephen_Matheny_Full_Stack_Software_Engineer.pdf"
          className="hero__link hero__link--primary"
          target="_blank"
          rel="noreferrer"
        >
          View Resume (PDF)
        </a>

        {github && (
          <>
            <span className="hero__divider">·</span>
            <a
              href={github}
              className="hero__link"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </>
        )}

        {linkedIn && (
          <>
            <span className="hero__divider">·</span>
            <a
              href={linkedIn}
              className="hero__link"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </>
        )}

        {email && (
          <>
            <span className="hero__divider">·</span>
            <a href={`mailto:${email}`} className="hero__link">
              Email
            </a>

            <button
              type="button"
              className={`hero__copy ${copied ? "copied" : ""}`}
              onClick={handleCopyEmail}
              aria-live="polite"
            >
              {copied ? "Copied!" : "Copy email"}
            </button>
          </>
        )}
      </div>
    </Reveal>
  );
}
