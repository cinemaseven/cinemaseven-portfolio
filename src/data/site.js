const SITE = {
  name: "Francine Angela",
  email: "cinella.alejandro@gmail.com",
  github: "https://github.com/cinemaseven",
  githubAll: "https://github.com/cinemaseven?tab=repositories",
  linkedin: "https://linkedin.com/in/francineangela",

  stack: [
    {
      title: "Languages",
      icon: "code",
      items: ["Python", "Java", "JavaScript", "HTML", "CSS", "Dart"],
    },
    {
      title: "Frameworks & Platforms",
      icon: "grid",
      items: ["React", "Node.js", "Tailwind CSS", "Flutter", "Supabase"],
    },
    { title: "Databases", icon: "database", items: ["SQL", "PostgreSQL"] },
    {
      title: "Tools",
      icon: "tool",
      items: ["Git", "GitHub", "VS Code", "Figma", "Canva"],
    },
  ],

  education: [
    {
      icon: "cap",
      title: "Bachelor of Science in Computer Science",
      school: "Holy Angel University (HAU), Angeles City, Pampanga",
      dates: "2023 to 2027",
      note: [
        "Dean's Lister (1 semester)",
        "President's Lister (6 semesters)",
        "Academic Scholar (2 semesters)",
      ],
    },
    {
      icon: "cap",
      hs: true,
      title: "Science, Technology, Engineering, and Mathematics (STEM) Track",
      school: "Santa Rita College of Pampanga",
      dates: "2021 to 2023",
      note: ["Graduated with High Honors"],
    },
  ],

  experience: [
    {
      initials: "GDG",
      role: "Internal Relations Staff",
      org: "Google Developers Group (GDG)",
      dates: "2025 - 2026",
      l1: "Helped share updates and maintain clear communication among members to keep group initiatives organized.",
      l2: "Coordinated with fellow staff to support member activities and the planning of organizational initiatives.",
    },
    {
      initials: "CG",
      role: "Events Staff",
      org: "Code Geeks (CG)",
      dates: "2025 - 2026",
      l1: "Worked with fellow members to help prepare event materials before activities.",
      l2: "Provided support and coordination to help events run smoothly.",
    },
    {
      initials: "LOOP",
      role: "Events Director",
      org: "League of Outstanding Programmers (LOOP)",
      dates: "2024 - 2025",
      l1: "Collaborated with fellow officers to plan organization events and seminars, coordinating details during preparation.",
      l2: "Helped organize event setup and supported on-site execution to keep activities running smoothly.",
    },
    {
      initials: "CSC",
      role: "Events Staff",
      org: "College Student Council (SOC-CSC)",
      dates: "2024 - 2025",
      l1: "Assisted with preparations and coordinated event-related tasks with other student council members.",
      l2: "Provided on-site support during activities and helped address event needs as they came up.",
    },
    {
      initials: "CSC",
      role: "Multimedia and Creatives Staff",
      org: "College Student Council (SOC-CSC)",
      dates: "2023 - 2024",
      l1: "Created posters and announcement graphics with clear layouts and consistent visual elements for council activities.",
      l2: "Photographed events to capture key moments for documentation and future publication.",
    },
  ],

  projectPreviews: {
    pickandsip: "project-previews/pick-and-sip.png",
    "animedika-a-rice-leaf-disease-detection-system":
      "project-previews/animedika.png",
    digifind: "project-previews/digifind.png",
    elingkod: "project-previews/elingkod.png",
    bakeandco: "project-previews/bakeandco.png",
    truth_in_tales: "project-previews/truth-in-tales.png",
    "": "project-previews/x.png",
  },

  projectTags: {
    "animedika-a-rice-leaf-disease-detection-system": [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Flask",
      "TensorFlow/Keras",
      "EfficientNetB0"
    ],
    pickandsip: [
      "React",
      "Vite",
      "Express",
      "Node.js",
      "PostgreSQL",
      "HTML",
      "CSS",
      "JavaScript"
    ],
    elingkod: ["Dart", "Python", "HTML", "Flutter"],
    digifind: ["HTML", "CSS", "JavaScript"],
    bakeandco: ["Dart", "HTML", "Flutter"],
    truth_in_tales: ["HTML", "CSS", "JavaScript"],
  },

  projectDetails: {
    "animedika-a-rice-leaf-disease-detection-system": {
      roles: ["UI/UX Design", "Frontend and Backend Development"],
      demo: "https://animedika-a-rice-leaf-disease-detection.onrender.com",
      desc: "Built a rice leaf disease classification system using an EfficientNetB0 CNN. Designed the interface and user flows, supported backend implementation and testing, and worked with the team to integrate the model into an end-to-end web application.",
    },
    pickandsip: {
      roles: [
        "UI/UX Design",
        "Frontend and Backend Development",
        "Database Management",
      ],
      demo: "https://pick-and-sip.onrender.com",
      desc: "Designed and developed a personal café-tracking app for saving places, recording visits and orders, and keeping café experiences organized. Built search, map-based location selection, filters, café details, visit and order tracking, and dashboard summaries, using a React/Vite frontend, Node.js/Express API, and Supabase PostgreSQL database.",
    },
    elingkod: {
      roles: [
        "UI/UX Design",
        "Frontend and Backend Development",
        "Database Management",
      ],
      desc: "Contributed to a mobile app for accessing barangay services by designing interface elements, building application screens with the team, supporting service-related backend features, and organizing the data used by the app.",
    },
    digifind: {
      roles: [
        "UI/UX Design",
        "Frontend and Backend Development",
        "Database Management",
      ],
      demo: "https://cinemaseven.github.io/DigiFind/",
      desc: "Designed and developed a responsive camera-discovery website. Organized camera details and browsing tools to help people explore models and compare options based on their preferences, contributing across the frontend, backend, and database.",
    },
  },

  additionalProjects: [
    {
      repository: "roki-a/bakeandco",
      title: "Bake & Co.",
      description:
        "Helped shape a cohesive bakery-themed interface that presents products clearly. Contributed Flutter and Dart screens and product displays, supported core backend features, and helped manage the application database.",
      roles: [
        "UI/UX Design",
        "Frontend and Backend Development",
        "Database Management",
      ],
      tags: ["Flutter", "Dart"],
      source: "https://github.com/roki-a/bakeandco",
      demo: "",
      image: "",
    },
    {
      repository: "RandelYumul/Truth_in_Tales",
      title: "Truth in Tales",
      description:
        "Helped arrange the website layout and visual elements for a cohesive, readable browsing experience, and wrote a blog article about cancel culture.",
      roles: ["UI/UX Design", "Content Writing"],
      tags: [],
      source: "https://github.com/RandelYumul/Truth_in_Tales",
      demo: "https://randelyumul.github.io/Truth_in_Tales/",
      image: "",
    },
  ],

  projectOrder: [
    "AniMedika-A-Rice-Leaf-Disease-Detection-System",
    "PickAndSip",
    "eLingkod",
    "DigiFind",
    "bakeandco",
    "Truth_in_Tales",
  ],
  projectExclusions: ["ArbiTrust", "portfolio", "cinemaseven-portfolio"],

  certificates: [
    {
      title: "CompTIA IT Fundamentals+ (ITF+) Certification",
      issuer: "CompTIA",
      date: "November 2023",
      verify:
        "https://www.credly.com/badges/4feaed79-ebc1-4bf0-a5c1-ce00d7582d71/linked_in_profile",
    },
    {
      title: "Legacy Responsiveness Web Design V8",
      issuer: "freeCodeCamp",
      date: "September 2024",
      verify:
        "https://www.freecodecamp.org/certification/cinemangela/responsive-web-design",
    },
    {
      title: "Work with Components in Figma",
      issuer: "Coursera",
      date: "September 2024",
      verify:
        "https://www.coursera.org/account/accomplishments/verify/LEJ6RB98ZYU2",
    },
    {
      title: "JavaScript Essentials 1",
      issuer: "Cisco",
      date: "October 2024",
      verify:
        "https://www.credly.com/badges/99162437-052d-4ad9-ad68-3d3cdf91614d/linked_in_profile",
    },
    {
      title: "Relational Database V8",
      issuer: "freeCodeCamp",
      date: "February 2025",
      verify:
        "https://www.freecodecamp.org/certification/cinemangela/relational-database-v8",
    },
    {
      title: "Endpoint Security",
      issuer: "Cisco",
      date: "August 2025",
      verify:
        "https://www.credly.com/badges/abaae5a9-9457-4680-a82e-147dac52588f/linked_in_profile",
    },
    {
      title: "Cyber Threat Management",
      issuer: "Cisco",
      date: "November 2025",
      verify:
        "https://www.credly.com/badges/20e34f4a-26c1-4009-afe5-08d25590cbe6/linked_in_profile",
    },
    {
      title: "AI Fundamentals with IBM SkillsBuild",
      issuer: "Cisco",
      date: "March 2026",
      verify:
        "https://www.credly.com/badges/69410cb9-b24a-4c3b-a661-ffe8c217ef10/linked_in_profile",
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "Cisco",
      date: "March 2026",
      verify:
        "https://www.credly.com/badges/a6d7d87e-223a-4565-a3c7-9440e93df313/linked_in_profile",
    },
    {
      title: "AWS Academy Graduate - Cloud Foundations - Training Badge",
      issuer: "Cisco",
      date: "March 2026",
      verify:
        "https://www.credly.com/badges/cbfecea4-580c-413a-9600-db49d0665979/linked_in_profile",
    },
    {
      title: "Data Analytics Essential",
      issuer: "Cisco",
      date: "March 2026",
      verify:
        "https://www.credly.com/badges/e4c2cf3e-4a1a-4a7b-bbd5-3484fe0b8a04/linked_in_profile",
    },
    {
      title: "Getting Started with Microsoft Excel",
      issuer: "Coursera",
      date: "April 2026",
      verify:
        "https://www.coursera.org/account/accomplishments/verify/8HDKW8WXCB7H",
    },
  ],
};

export default SITE;
