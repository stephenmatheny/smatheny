export const profile = {
  firstName: "Stephen",
  lastName: "Matheny",
  email: 'stephen@smatheny.com',
  headline: "Software Engineer building maintainable, data-driven web applications",
  location: "Texas",
  links: [
    { text: "Email", value: "stephen@smatheny.com" },
    { text: "GitHub", value: "https://github.com/stephenmatheny" },
    { text: "LinkedIn", value: "https://www.linkedin.com/in/matheny-stephen/" },
  ],
  skillGroups: [
    { name: "Frontend", items: ["React", "Inertia", "Vite"] },
    { name: "Backend", items: ["Laravel", "PHP", "REST APIs"] },
    { name: "Data", items: ["MySQL", "PostgreSQL"] },
    { name: "DevOps & Tooling", items: ["Docker", "Git", "CI/CD"] },
  ],
  experience: [
    {
      org: "Solutions Arkitect",
      role: "Founder",
      dates: "Nov 2023 – Present",
      summary:
        "Founded a nonprofit delivering production-ready web applications and math enrichment programs.",
      bullets: [
        "Built full-stack systems using Laravel, React, and REST APIs",
        "Designed relational databases with MySQL and PostgreSQL using migrations and ORM",
        "Partnered with educators and administrators to automate workflows and reduce operational friction",
        "Led system architecture, deployment strategy, and long-term technical roadmap",
      ],
    },
    {
      org: "NCS Credit",
      role: "Software Engineer",
      dates: "Aug 2022 – Sept 2025",
      summary:
        "Developed and maintained enterprise software supporting financial and credit processing workflows.",
      bullets: [
        "Built and maintained full-stack applications supporting core business operations",
        "Developed RESTful APIs and backend business logic",
        "Optimized SQL queries and data models for performance and reliability",
        "Refactored legacy systems to improve maintainability and scalability",
      ],
    },
    {
      org: "friEdTech",
      role: "Software Engineer",
      dates: "Dec 2021 – Jul 2022",
      summary:
        "Built education technology platforms used by K–12 school districts.",
      bullets: [
        "Implemented backend features and frontend interfaces for district-facing applications",
        "Collaborated with product and education stakeholders to translate requirements into software",
        "Worked with relational databases, APIs, and MVC architecture",
      ],
    },
    {
      org: "Kincaid IT",
      role: "Software Engineer",
      dates: "Aug 2021 – Dec 2021",
      summary:
        "Contributed to custom software development projects across multiple client engagements.",
      bullets: [
        "Delivered full-stack features using PHP, JavaScript, and SQL",
        "Worked in a consulting-based, agile development environment",
        "Shipped production-ready solutions based on client specifications",
      ],
    },
    {
      org: "Lufkin Middle School",
      role: "Coding & Robotics Teacher",
      dates: "Aug 2025 – Dec 2025",
      summary:
        "Taught computer science and robotics with an emphasis on foundational programming and problem-solving.",
      bullets: [
        "Introduced students to programming concepts including variables, conditionals, and loops",
        "Designed hands-on robotics and coding projects to reinforce computational thinking",
      ],
    },
    {
      org: "Hudson Middle School",
      role: "Computer Science, CAD & Math Teacher",
      dates: "Aug 2017 – Aug 2021",
      summary:
        "Delivered CS, CAD, and math instruction emphasizing logic and analytical reasoning.",
      bullets: [
        "Developed and taught curriculum focused on algorithms, problem-solving, and design",
        "Integrated technology and data-driven practices into instruction",
      ],
    },
    {
      org: "Livingston Junior High School",
      role: "Math Teacher",
      dates: "Aug 2015 – Aug 2017",
      summary:
        "Provided middle school mathematics instruction focused on conceptual understanding.",
      bullets: [
        "Taught algebraic reasoning, number sense, and problem-solving strategies",
        "Designed assessments and adjusted instruction using student performance data",
      ],
    },
  ],
  projects: [
    {
      name: "ChessQL",
      description:
        "Platform for managing chess clubs, games, and player ratings with an emphasis on clean data modeling and workflow automation.",
      tech: ["Laravel", "React", "MySQL"],
      // link: "https://www.chessql.com",
    },
    {
      name: "Everyone’s Board",
      description:
        "Board game cataloging and tracking platform that allows users to manage collections, plays, and game metadata.",
      tech: ["React", "Laravel", "PostgreSQL"],
      // link: "https://www.everyonesboard.com",
    },
    {
      name: "ArkAssess",
      description:
        "Assessment-building platform for educators that streamlines quiz creation, data collection, and instructional workflows.",
      tech: ["Laravel", "React", "REST APIs"],
      // link: "https://www.arkassess.com",
    },
    {
      name: "InvArk",
      description:
        "Inventory and asset management system designed to track items, ownership, and lifecycle across organizations.",
      tech: ["Laravel", "React", "PostgreSQL"],
      // link: "https://www.invark.com",
    },
    {
      name: "Google Apps Script Automations",
      description:
        "Custom Google Workspace automations for email cleanup, document generation, and workflow optimization.",
      tech: ["Google Apps Script", "JavaScript", "Google APIs"],
      // link: "https://github.com/stephenmatheny/google-apps-script-tools",
    },
    {
      name: "Personal Resume Website",
      description:
        "Responsive, accessible resume website with subtle micro-interactions and performance-focused frontend design.",
      tech: ["React", "Vite", "CSS"],
      // link: "https://www.smatheny.com",
    },
  ],
};
