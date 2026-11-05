export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  description: string;
  problemSolved: string;
  keyFeatures: string[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  statusBadge: string;
  highlights: string[];
  colorAccent: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  institution: string;
  location: string;
  scoreOrRole: string;
  type: 'education' | 'experience';
  summary: string;
  details: string[];
  technologies?: string[];
  isUpcoming?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string;
    note?: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  award: string;
  organizer: string;
  category: string;
  description: string;
  badge: string;
  keyDetail: string;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  scoreOrStatus?: string;
  domain: string;
  date: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: 'Abisha J.',
  shortName: 'Abisha',
  initials: 'AJ',
  role: 'Computer Science Engineering Student',
  subRole: 'Aspiring Software Developer | Full-Stack Developer',
  college: "St. Xavier's Catholic College of Engineering (SXCCE)",
  collegeLocation: 'Chunkankadai, Kanyakumari, Tamil Nadu',
  location: 'Kulasekharam, Kanyakumari, Tamil Nadu, India',
  email: 'abishajustinjose04@gmail.com',
  phone: '+91 9677392641',
  cgpa: '8.89',
  graduationYear: '2028',
  degree: 'B.E. Computer Science and Engineering',
  linkedinUrl: 'https://www.linkedin.com/in/abisha-j04/',
  githubUrl: 'https://github.com/abishajustinjose04-ctrl',
  resumePath: '/assets/aistudio/Abisha_J_Resume_f3a225a4.pdf',
  profileImagePath: '/assets/aistudio/profile_e2c918b2.jpeg',
  aboutHeadline: 'Curious mind, creative builder.',
  aboutBio1:
    "I'm a third-year Computer Science and Engineering student at St. Xavier's Catholic College of Engineering with an 8.89 CGPA. I have a genuine fascination with how scalable software architectures come together—from well-structured Java backends to clean, interactive frontend interfaces.",
  aboutBio2:
    "My journey combines academic rigor with hands-on building: creating our college's mini-project online examination portal using Spring Boot and MySQL, developing the CivicConnect AI public complaint management system shortlisted for CodeSprint '26 prototype round, and expanding into modern web frameworks like React and Vite.",
  aboutBio3:
    "Outside the classroom, I actively participate in hackathons and technical competitions—recently winning 2nd prize in the college-level Karka Infini Bug Hunt and qualifying for the district round. I believe in writing clear, maintainable code and solving real problems through technology.",
};

export const ROTATING_ROLES = [
  'Aspiring Software Developer',
  'Full-Stack Developer',
  'Java Developer',
  'Technology Enthusiast',
  'CSE Student at SXCCE',
];

export const CORE_PILLARS = [
  {
    title: 'Academic Foundation',
    badge: '8.89 CGPA',
    description:
      'Grounded in core computer science fundamentals—Object-Oriented Programming, Database Management Systems, Computer Networks, and Operating Systems.',
  },
  {
    title: 'Full-Stack Drive',
    badge: 'Spring Boot & React',
    description:
      'Hands-on experience architecting backend RESTful services in Java & Flask, connected to relational databases and reactive frontend interfaces.',
  },
  {
    title: 'Competitive Problem Solving',
    badge: 'Hackathons & Bug Hunts',
    description:
      "Proven under pressure with 2nd place in college Bug Hunt, CodeSprint '26 prototype shortlist, and SIH Round 2 qualification.",
  },
  {
    title: 'Continuous Learning',
    badge: 'Curious & Adaptable',
    description:
      'Consistently earning certifications across Java, RDBMS, and AI productivity to stay ahead of industry standards and emerging paradigms.',
  },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'sxcce-be',
    period: '2024 — 2028',
    title: 'B.E. Computer Science and Engineering',
    institution: "St. Xavier's Catholic College of Engineering (SXCCE)",
    location: 'Chunkankadai, Kanyakumari, Tamil Nadu',
    scoreOrRole: 'Current CGPA: 8.89',
    type: 'education',
    summary:
      'Pursuing Bachelor of Engineering in CSE with deep coursework in algorithmic design, object-oriented software engineering, relational databases, and distributed networks.',
    details: [
      'Maintaining an outstanding 8.89 CGPA across foundational and advanced computer science semesters.',
      'Active participant in departmental software hackathons and competitive technical challenges.',
      'Core developer for academic software systems including the SXCCE ExamPortal.',
      'Active NSS Volunteer (attended NSS Camp 2025 contributing to community digital awareness).',
    ],
    technologies: ['Java', 'Python', 'C', 'PostgreSQL', 'SQL', 'Data Structures', 'OOP'],
  },
  {
    id: 'agileinfo-intern',
    period: '13 June 2026 — 13 July 2026',
    title: 'Development Intern',
    institution: 'Agileinfo Techytern Solutions LLP',
    location: 'Tamil Nadu, India',
    scoreOrRole: 'Frontend & Full-Stack Internship',
    type: 'experience',
    isUpcoming: true,
    summary:
      'Selected for an intensive software development internship focused on core web technologies and frontend application development.',
    details: [
      'Contributed to software development activities as part of the engineering team.',
      'Built and refined responsive user interfaces for the TravelMate Holidays web platform.',
      'Implemented clean, modular styling using semantic HTML5, CSS3, and modern JavaScript.',
      'Collaborated on code reviews, component styling, and cross-browser responsiveness.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI', 'Git'],
  },
  {
    id: 'st-ursula-school',
    period: 'Completed 2024',
    title: 'Higher Secondary (12th) & SSLC (10th)',
    institution: "St. Ursula's Girls Higher Secondary School",
    location: 'Tamil Nadu (State Board)',
    scoreOrRole: '12th: 92% | 10th: 94%',
    type: 'education',
    summary:
      'Strong academic foundation in Mathematics, Physics, Chemistry, and Computer Science with stellar academic distinction.',
    details: [
      'Achieved 92% in Higher Secondary Examination (12th Grade).',
      'Achieved 94% in Secondary School Leaving Certificate (10th Grade).',
      'Demonstrated high aptitude in mathematics and analytical problem-solving.',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code2',
    description: 'Foundational languages used for algorithms, backend APIs, and competitive tasks',
    skills: [
      { name: 'Java', level: 'Core Language', note: 'OOP, Collections, Streams, Java 17' },
      { name: 'Python', level: 'Scripting & Logic', note: 'Bug hunts, Flask, automation' },
      { name: 'C', level: 'Systems Foundation', note: 'Memory logic, pointers, data structures' },
      { name: 'JavaScript', level: 'Web Programming', note: 'ES6+, DOM, asynchronous promises' },
    ],
  },
  {
    title: 'Frontend Development',
    iconName: 'Layout',
    description: 'Building accessible, fluid, and responsive user interfaces',
    skills: [
      { name: 'HTML5', level: 'Semantic Markup', note: 'Accessible structure & SEO' },
      { name: 'CSS3', level: 'Styling & Layout', note: 'Flexbox, Grid, CSS animations' },
      { name: 'React', level: 'Modern Library', note: 'Hooks, component architecture' },
      { name: 'Vite', level: 'Build Tooling', note: 'Fast bundling & HMR workflows' },
      { name: 'Tailwind CSS', level: 'Utility-First', note: 'Responsive design tokens' },
    ],
  },
  {
    title: 'Backend & APIs',
    iconName: 'Server',
    description: 'Server architecture, RESTful services, and authentication workflows',
    skills: [
      { name: 'Spring Boot', level: 'Enterprise Java', note: 'REST APIs, Spring Data JPA' },
      { name: 'Flask', level: 'Python Microframework', note: 'Lightweight API routing' },
      { name: 'REST APIs', level: 'API Design', note: 'CRUD patterns, JSON payloads' },
      { name: 'Maven', level: 'Java Build Tool', note: 'Dependency & lifecycle management' },
    ],
  },
  {
    title: 'Databases & Storage',
    iconName: 'Database',
    description: 'Relational data modeling, query optimization, and schema integrity',
    skills: [
      { name: 'PostgreSQL', level: 'Relational RDBMS', note: 'Complex queries, schema indexing' },
      { name: 'MySQL', level: 'Relational Database', note: 'Spring Boot JPA integration' },
      { name: 'SQL', level: 'Query Language', note: 'Joins, aggregations, normalization' },
    ],
  },
  {
    title: 'Developer Tools & Platforms',
    iconName: 'Wrench',
    description: 'Version control, collaborative workflows, and IDE ecosystems',
    skills: [
      { name: 'Git', level: 'Version Control', note: 'Branching, commits, merging' },
      { name: 'GitHub', level: 'Collaboration', note: 'Remote repos, issues, pull requests' },
      { name: 'VS Code', level: 'Code Editor', note: 'Custom extensions, debugging' },
    ],
  },
  {
    title: 'Core Computer Science',
    iconName: 'Cpu',
    description: 'Theoretical foundations governing efficient, scalable computation',
    skills: [
      { name: 'Object-Oriented Programming (OOP)', level: 'Design Paradigm', note: 'Encapsulation, Polymorphism' },
      { name: 'DBMS', level: 'Data Concepts', note: 'ACID properties, Relational models' },
      { name: 'Operating Systems', level: 'Core Concepts', note: 'Processes, memory, threads' },
      { name: 'Computer Networks', level: 'Protocols', note: 'TCP/IP, HTTP/HTTPS, routing' },
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'sxcce-exam-portal',
    title: 'SXCCE ExamPortal',
    subtitle: 'Smart Online Examination & Assessment Management System',
    category: 'Academic Mini Project',
    tagline: 'Structured digital assessment platform for college examinations and anti-cheating audit tracking.',
    description:
      'Developed as a college mini-project at SXCCE to streamline digital test administration. Provides distinct portals for students and administrators, enabling timed examinations, real-time question navigation, automatic evaluation, and tab-switch monitoring to uphold assessment integrity.',
    problemSolved:
      'Manual and unstructured paper examinations create administrative overhead, slow evaluation cycles, and lack real-time activity oversight during digital evaluations.',
    keyFeatures: [
      'Role-based authentication separating student test-takers and administrative staff.',
      'Dynamic question bank management with automated randomized question ordering.',
      'Live synchronized examination countdown timer with automated submission on expiry.',
      'Active tab-switch event listener tracking unauthorized window navigation during exams.',
      'Automated grading engine calculating instantaneous results and score summaries.',
      'Spring Data JPA integration with relational MySQL for ACID-compliant test persistence.',
    ],
    technologies: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Maven'],
    githubUrl: 'https://github.com/abishajustinjose04-ctrl/sxcce-exam-portal',
    statusBadge: 'Academic Software System',
    highlights: ['Spring Boot Backend', 'Tab-Switch Detection', 'Instant Grading Engine', 'Role-Based Auth'],
    colorAccent: '#e5b842',
  },
  {
    id: 'civicconnect-ai',
    title: 'CivicConnect AI',
    subtitle: 'Smart Public Complaint Management System',
    category: "Hackathon Project — CodeSprint '26",
    tagline: 'Streamlining citizen grievance reporting and municipal department routing.',
    description:
      "Designed and developed for the college-level hackathon CodeSprint '26, where it was shortlisted for the Prototype Round. CivicConnect AI enables citizens to easily submit, categorize, and track municipal complaints while providing administrative staff with clear departmental triage dashboards.",
    problemSolved:
      'Traditional municipal grievance processes suffer from opaque tracking, lost paperwork, and misdirected departmental assignments that frustrate citizens.',
    keyFeatures: [
      'Intuitive complaint submission portal with category tagging and location details.',
      'Backend REST API endpoints built with Python and Flask for issue processing.',
      'PostgreSQL database storing complaint lifecycle states from pending to resolved.',
      'Departmental administrator view to filter complaints and update status in real time.',
      'Frontend built with React and Vite for rapid, lightweight user interaction.',
    ],
    technologies: ['React', 'Vite', 'Python', 'Flask', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    githubUrl: 'https://github.com/abishajustinjose04-ctrl/CivicConnect-AI',
    statusBadge: 'CodeSprint 26 Prototype Finalist',
    highlights: ["CodeSprint '26 Prototype", 'Flask REST API', 'PostgreSQL Persistence', 'Citizen Dashboard'],
    colorAccent: '#38bdf8',
  },
  {
    id: 'travelmate-holidays',
    title: 'TravelMate Holidays',
    subtitle: 'Full-Stack & Frontend Travel Showcase Website',
    category: 'Web Development Project & Internship Focus',
    tagline: 'Modern, responsive travel and destination portal with intuitive user booking flows.',
    description:
      'A travel and tourism website built using core web technologies to deliver an appealing, accessible visual showcase of tour packages, itineraries, and booking inquiries. Enhanced as part of frontend development activities with Agileinfo Techytern Solutions.',
    problemSolved:
      'Small tourism operators need lightweight, high-performance web showcases that load fast on mobile devices without heavy framework overhead.',
    keyFeatures: [
      'Responsive destination gallery showcasing popular holiday packages and itineraries.',
      'Interactive booking inquiry interface built with clean form validation.',
      'Cross-browser tested CSS layout utilizing modern flexbox and grid techniques.',
      'Modular JavaScript code ensuring swift DOM updates and interactive accordions.',
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'Git'],
    githubUrl: 'https://github.com/abishajustinjose04-ctrl/TravelMate-Holidays',
    statusBadge: 'Client/Internship Project',
    highlights: ['Pure Web Tech', 'High Performance', 'Mobile Responsive', 'Clean Typography'],
    colorAccent: '#10b981',
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    id: 'bug-hunt',
    title: 'Karka Infini Bug Hunt',
    award: 'Second Prize (College Level)',
    organizer: 'SXCCE Technical Competition',
    category: 'Technical Bug Finding & Code Auditing',
    description:
      'Secured 2nd prize in the competitive college-level bug hunt analyzing and debugging complex Python logic under strict time limits. Successfully qualified for the district-level round.',
    badge: '2nd Prize Winner',
    keyDetail: 'District Round Qualifier · Python Language',
  },
  {
    id: 'codesprint-26',
    title: "Hackathon-CodeSprint '26",
    award: 'Shortlisted for Prototype Round',
    organizer: 'College-Level Hackathon',
    category: 'Rapid Prototyping & Software Build',
    description:
      "Successfully advanced to the prototype presentation stage in CodeSprint '26 for developing CivicConnect AI, a smart public complaint management and routing system.",
    badge: 'Prototype Finalist',
    keyDetail: "CivicConnect AI · CodeSprint '26 Finalist",
  },
  {
    id: 'sih-round-2',
    title: 'Smart India Hackathon (SIH)',
    award: 'Shortlisted for Round 2',
    organizer: 'College Screening Round',
    category: 'National Hackathon Initiative',
    description:
      'Successfully cleared the college preliminary screening and was shortlisted for Round 2 of Smart India Hackathon at the institutional level.',
    badge: 'Round 2 Shortlist',
    keyDetail: 'College-Level Screening · Round 2 Qualified',
  },
  {
    id: 'pqc-ids-paper',
    title: 'Post-Quantum Intrusion Detection System',
    award: 'Technical Research Paper Presentation',
    organizer: 'Academic Symposium',
    category: 'Cybersecurity & Quantum Era Cryptography',
    description:
      'Presented a specialized research study examining intrusion detection mechanisms resilient against cryptographic threats posed by quantum computing architectures.',
    badge: 'Research Presentation',
    keyDetail: 'Cybersecurity & Post-Quantum Network Safety',
  },
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    id: 'cert-java-iitb',
    title: 'Java Programming Certification',
    organization: 'EduPyramids / SINE, IIT Bombay',
    scoreOrStatus: 'Scored 80%',
    domain: 'Core Java & Object-Oriented Software',
    date: 'Verified Credential',
    description:
      'Comprehensive curriculum covering Java architecture, classes, interfaces, exception handling, multithreading, and collections framework.',
  },
  {
    id: 'cert-digital-marketing',
    title: 'Digital Marketing Course',
    organization: 'Alo Info-tech Private Limited',
    scoreOrStatus: 'Completed',
    domain: 'Online Media & Growth Channels',
    date: 'Verified Credential',
    description:
      'Hands-on training in search optimization, content strategy, user engagement analysis, and digital brand positioning.',
  },
  {
    id: 'cert-unicef-ai',
    title: 'Digital Productivity with AI',
    organization: 'UNICEF Learning Initiative',
    scoreOrStatus: 'Certified',
    domain: 'Artificial Intelligence & Productivity',
    date: 'Verified Credential',
    description:
      'Practical frameworks for harnessing AI tools, workflow acceleration, algorithmic ethics, and digital productivity paradigms.',
  },
  {
    id: 'cert-sxcce-postgres',
    title: 'PostgreSQL / RDBMS Practical Training',
    organization: "St. Xavier's Catholic College of Engineering",
    scoreOrStatus: 'Completed',
    domain: 'Database Engineering & Relational Design',
    date: 'Verified Credential',
    description:
      'Intensive hands-on lab training covering relational schema modeling, SQL triggers, subqueries, indexing, and data integrity.',
  },
  {
    id: 'cert-swayam-php',
    title: 'PHP & MySQL Training',
    organization: 'SWAYAM Plus / EduPyramids / SINE IIT Bombay',
    scoreOrStatus: 'Completed',
    domain: 'Full-Stack Web Development',
    date: 'Verified Credential',
    description:
      'Server-side web development fundamentals, form handling, session management, and persistent relational data operations.',
  },
  {
    id: 'cert-simplilearn-php',
    title: 'PHP Web Certification',
    organization: 'Simplilearn',
    scoreOrStatus: 'Certified',
    domain: 'Backend Web Scripting',
    date: 'Verified Credential',
    description:
      'Backend architectural concepts, modular function creation, and database integration for dynamic web platforms.',
  },
];

export const INTERESTS_DATA = [
  {
    area: 'Full-Stack Web Architectures',
    description: 'Designing end-to-end web software using Spring Boot, React, and robust relational storage.',
  },
  {
    area: 'Competitive Programming & Problem Solving',
    description: 'Tackling algorithmic challenges, code efficiency audits, and technical bug hunts.',
  },
  {
    area: 'Cybersecurity & Post-Quantum Defense',
    description: 'Exploring network anomaly detection and intrusion prevention in modern software pipelines.',
  },
  {
    area: 'Modern Database Optimization',
    description: 'Schema normalization, query optimization, and transaction safety in PostgreSQL and MySQL.',
  },
];
