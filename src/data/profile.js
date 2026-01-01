export const profile = {
  firstName: "Stephen",
  lastName: "Matheny",
  headline: "Software Engineer building maintainable, data-driven web applications",
  location: "Texas",
  links: [
    { text: "Email", value: "stephen@smatheny.com" },
    { text: "GitHub", value: "https://github.com/stephenmatheny" },
    { text: "LinkedIn", value: "https://www.linkedin.com/in/matheny-stephen/" },
  ],
  about:
    "Full-stack software engineer with a background in education and experience building production-ready web applications. I enjoy designing systems, automating workflows, and writing clean, maintainable code that scales with real-world use. I am a highly self-directed problem solver who collaborates well with stakeholders and teammates to turn ambiguous requirements into reliable solutions. I consistently invest time in learning new technologies and refining my craft. In my spare time, I build side projects, design math enrichment programs, organize chess events, and spend time with my family.",
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
        "Founded a nonprofit software and education organization delivering production-ready web applications and math enrichment programs to support school districts, educators, and students.",
      bullets: [
        "Designed and developed full-stack web applications using Laravel, React, JavaScript, and REST APIs",
        "Architected relational databases using MySQL and PostgreSQL with migrations and Eloquent ORM",
        "Collaborated directly with educators and administrators to gather requirements and deliver workflow automation solutions",
        "Led system architecture, deployment strategy, and long-term technical roadmap",
        "Designed and delivered small-group math enrichment programs focused on conceptual understanding, number sense, and problem-solving",
        "Created curriculum, assessments, and instructional materials aligned to student skill gaps and learning progressions",
      ],
    },
    {
      org: "Lufkin Middle School",
      role: "Coding & Robotics Teacher",
      dates: "Aug 2025 – Dec 2025",
      summary:
        "Taught computer science and robotics with a focus on foundational programming concepts and applied problem-solving.",
      bullets: [
        "Introduced students to programming concepts including variables, conditionals, loops, and functions",
        "Designed hands-on robotics and coding projects to reinforce computational thinking and logic",
        "Integrated technology-based learning tools to support student engagement and skill development",
      ],
    },
    {
      org: "NCS Credit",
      role: "Software Engineer",
      dates: "Aug 2022 – Sept 2025",
      summary:
        "Developed and maintained enterprise-grade software systems supporting financial and credit processing workflows.",
      bullets: [
        "Built and maintained full-stack applications using modern backend and frontend frameworks",
        "Developed RESTful APIs and business logic to support core application functionality",
        "Optimized SQL queries and data models to improve performance and reliability",
        "Refactored legacy codebases to improve scalability, maintainability, and code quality",
      ],
    },
    {
      org: "friEdTech",
      role: "Software Engineer",
      dates: "Dec 2021 – Jul 2022",
      summary:
        "Developed education technology platforms used by K–12 school districts and educators.",
      bullets: [
        "Implemented backend features and frontend interfaces for district-facing web applications",
        "Collaborated with product and education stakeholders to translate requirements into software solutions",
        "Worked with relational databases, APIs, and MVC application architecture",
      ],
    },
    {
      org: "Kincaid IT",
      role: "Software Engineer",
      dates: "Aug 2021 – Dec 2021",
      summary:
        "Contributed to custom software development projects across multiple client engagements.",
      bullets: [
        "Developed full-stack application features based on client specifications",
        "Worked with PHP, JavaScript, and SQL to deliver production-ready solutions",
        "Collaborated in an agile, consulting-based development environment",
      ],
    },
    {
      org: "Hudson Middle School",
      role: "Computer Science, CAD & Math Teacher",
      dates: "Aug 2017 – Aug 2021",
      summary:
        "Delivered instruction in computer science, CAD, and mathematics while integrating technology into curriculum design.",
      bullets: [
        "Developed and taught computer science and CAD curriculum emphasizing logic, algorithms, and problem-solving",
        "Integrated programming concepts into math instruction to strengthen analytical reasoning",
        "Utilized educational technology tools to enhance student learning outcomes",
      ],
    },
    {
      org: "Livingston Junior High School",
      role: "Math Teacher",
      dates: "Aug 2015 – Aug 2017",
      summary:
        "Provided middle school mathematics instruction focused on foundational skills and conceptual understanding.",
      bullets: [
        "Taught algebraic reasoning, number sense, and problem-solving strategies",
        "Designed assessments and instructional materials to support diverse learning needs",
        "Applied data-driven approaches to monitor student progress and adjust instruction",
      ],
    },
  ],

  projects: [
    {
      name: "ChessQL",
      description:
        "Platform for managing chess clubs, games, and player ratings.",
      tech: ["Laravel", "React"],
      // link: "https://www.chessql.com",
    },
  ],
};
