export const profile = {
  firstName: "Stephen",
  lastName: "Matheny",
  headline: "Software Engineer building maintainable, data-driven web applications",
  location: "Texas",
  links: {
    email: "stephen@smatheny.com",
    github: "https://github.com/stephenmatheny",
    linkedin: "https://www.linkedin.com/in/matheny-stephen/",
  },
  about:
    "I design and build software systems with an emphasis on clarity, maintainability, and pragmatic decision-making. I focus on writing code that teams can understand, extend, and trust over the long term.",
  skillGroups: [
    { name: "Frontend", items: ["React", "Inertia", "Vite"] },
    { name: "Backend", items: ["Laravel", "PHP", "REST APIs"] },
    { name: "Data", items: ["MySQL", "PostgreSQL"] },
    { name: "DevOps & Tooling", items: ["Docker", "Git", "CI/CD"] },
  ],
  projects: [
    {
      name: "ChessQL",
      description:
        "Platform for managing chess clubs, games, and player ratings.",
      tech: ["Laravel", "React"],
      link: "https://www.chessql.com",
    },
  ],
};
