# Abisha J. — Personal Developer Portfolio Website

An editorial personal portfolio website for Abisha J. (Computer Science Engineering Student, St. Xavier's Catholic College of Engineering), specifically crafted as a personal website and public portfolio (not an application or dashboard) following the visual architecture, typography, and storytelling style of [msenthil.com](https://msenthil.com/).

---

### User Review & Critical Decisions

> [!IMPORTANT]
> **Core Format & Framing Clarification**:
> - **Personal Developer Website (Not an App)**: Built purely as a responsive personal portfolio website with semantic web landmarks (`<header class="nav">`, `<main>`, `<section class="section">`, `<footer>`), web navigation anchors, editorial storytelling, and public web presence. No internal dashboard, authentication wall, or application state.
> 
> **Confirmed Project Specifications**:
> - **Internship Date**: Agileinfo Techytern Solutions LLP scheduled for **June – July 2026** (presented as an upcoming development internship role highlighting frontend engineering on the TravelMate Holidays website).
> - **Default Visual Theme**: **Dark Luxury Website Theme** (`#0a0a0c` canvas, metallic gold accents `#e5b842`, subtle card borders) on initial load, paired with a functional light mode toggle.
> - **Certifications Scope**: Full inclusion of all **6 verified certifications/trainings** (EduPyramids / SINE IIT Bombay Java, Alo Info-tech Digital Marketing, UNICEF AI Productivity, SXCCE PostgreSQL, SWAYAM Plus PHP/MySQL, Simplilearn PHP).
> - **Project Showcase Order**: **SXCCE ExamPortal** (Mini-Project Showcase), **CivicConnect AI** (SIH Problem Statement 8 Hackathon Prototype), and **TravelMate Holidays** (Frontend Web Development).

---

## 1. Overview & Core Concept

- **What It Is**: A personal developer portfolio website presenting Abisha J.'s engineering background, academic excellence, hackathon achievements, and technical projects.
- **Tone & Style**: Editorial, confident, polished, and authentic to a top-performing computer science student.
- **Key Experience**: A fluid single-page scrolling website with smooth anchor navigation, interactive background visuals, and project showcases that recruiters and peers can explore seamlessly on mobile and desktop.

---

## 2. Website Structure & Visual Design

### Semantic Website Sections (Matching msenthil.com)

1. **Header Navigation (`<header class="nav">`)**:
   - Monogram & wordmark brand: `Abisha J.`
   - Smooth-scrolling website section links: *About*, *Journey*, *Skills*, *Projects*, *Achievements*, *Certifications*, *Contact*.
   - Theme toggle (Dark / Light) with smooth transition.
   - Primary website CTA: **Download Resume** (downloads `/public/assets/aistudio/Abisha_J_Resume_f3a225a4.pdf`).
   - Mobile hamburger menu drawer with smooth toggle.

2. **Hero Section (`<section class="hero" id="hero">`)**:
   - Background: Lightweight interactive HTML5 canvas particle/mesh animation.
   - Eyebrow pill: `Computer Science Engineering Student · Kanyakumari, India`.
   - Editorial headline: **Abisha J.** with typographic split/outline styling.
   - Typewriter animation: *"I'm an Aspiring Software Developer"*, *"Full-Stack Developer"*, *"Java Developer"*, *"Technology Enthusiast"*.
   - Biography lead: Motivated computer science student passionate about building practical software, exploring emerging technologies, and solving real-world problems.
   - Hero visual: Circular portrait container with Abisha's uploaded photo (`/public/assets/aistudio/profile_e2c918b2.jpeg`), animated orbital rings with skill chips (*Java*, *React*, *Python*, *Full-Stack*), and 4 floating glass credential cards (*SXCCE · CSE '28*, *CGPA: 8.89*, *SIH Round 2 Shortlist*, *Bug Hunt 2nd Prize*).
   - Action links: **Explore My Work**, **Download Resume**, and **Let's Connect**.
   - Verified social links: LinkedIn, GitHub, Email.

3. **Milestone Metric Strip (`<div class="metrics-strip">`)**:
   - Highlights: **8.89 CGPA** (Academic Rigor), **3+ Featured Projects** (Hands-on Code), **2+ Hackathon Milestones** (SIH & CodeSprint), **100% Commitment** (Continuous Growth).

4. **Section 01: About Me (`<section class="section" id="about">`)**:
   - Editorial title: *"Curious mind, creative builder."*
   - Narrative covering academic journey at SXCCE, focus on software development, hackathon participation, and problem solving.
   - 4 Interactive Core Pillars: Academic Foundation, Full-Stack Engineering, Problem Solving, Continuous Learning.

5. **Section 02: My Journey (`<section class="section" id="journey">`)**:
   - Vertical timeline showcasing chronological milestones:
     - **B.E. Computer Science and Engineering** (St. Xavier's Catholic College of Engineering, 2024–2028 | CGPA: 8.89).
     - **Development Intern** (Agileinfo Techytern Solutions LLP, June–July 2026 | TravelMate Holidays frontend development).
     - **Higher Secondary & SSLC Education** (St. Ursula's Girls Higher Secondary School | 12th: 92%, 10th: 94%).

6. **Section 03: Technical Skills (`<section class="section" id="skills">`)**:
   - Categorized skill cards with clean unboxed text and subtle separators:
     - Programming Languages: Java, Python, C, JavaScript.
     - Web Technologies: HTML5, CSS3, JavaScript, React, Tailwind CSS.
     - Backend & APIs: Java, Spring Boot, Flask, REST APIs.
     - Databases: PostgreSQL, MySQL, SQL.
     - Development Tools: Git, GitHub, VS Code, Maven.
     - Core CS Subjects: OOP, DBMS, OS, Computer Networks.

7. **Section 04: Featured Projects (`<section class="section" id="projects">`)**:
   - **SXCCE ExamPortal**: Smart Online Examination and Proctoring System (Java 17, Spring Boot, JPA, MySQL, Maven). Real GitHub repository link, detailed problem-solving explanation, role-based access, and exam timer features.
   - **CivicConnect AI**: Smart Public Complaint Management System (React, Vite, Flask, PostgreSQL). Built for SIH Problem Statement 8.
   - **TravelMate Holidays**: Travel and Tourism website built with HTML5, CSS3, and JavaScript as part of internship frontend work.
   - Detailed modal view for each project to review full tech architecture and contributions.

8. **Section 05: Achievements & Recognition (`<section class="section" id="achievements">`)**:
   - **Karka Infini Bug Hunt**: Second Prize (College Level), Selected for District Round (Python).
   - **CodeSprint '26**: Shortlisted for Prototype Round (College-Level Hackathon).
   - **Smart India Hackathon (SIH)**: Shortlisted for Round 2 at college level.
   - **Research Presentation**: *Post-Quantum Intrusion Detection System* presentation.

9. **Section 06: Certifications & Training (`<section class="section" id="certifications">`)**:
   - EduPyramids / SINE, IIT Bombay (Java, Score: 80%).
   - Alo Info-tech Private Limited (Digital Marketing Course).
   - UNICEF Digital Productivity with AI.
   - SXCCE PostgreSQL / RDBMS Training.
   - SWAYAM Plus / EduPyramids (PHP and MySQL).
   - Simplilearn (PHP Certification).

10. **Section 07: Contact & Connect (`<section class="section" id="contact">`)**:
    - Heading: *"Have an idea? Let's build something meaningful."*
    - Interactive contact form with live validation (Name, Email, Subject, Message).
    - Functional direct mailto handler and one-click copy button for `abishajustinjose04@gmail.com`.
    - Phone contact (`+91 9677392641`) and location (`Kulasekharam, Kanyakumari, Tamil Nadu`).

11. **Footer (`<footer class="footer">`)**:
    - Wordmark monogram `Abisha J.`, tagline, quick links, and credit *"Designed with pride · Kanyakumari, Tamil Nadu · © 2026"*.

---

## 3. Visual Identity & Color System

```
Background (Dark Mode): #0a0a0c
Background (Light Mode): #f8fafc
Surface Cards:          #131318 / rgba(255, 255, 255, 0.03) (Dark) | #ffffff (Light)
Primary Accent:         #e5b842 (Warm Metallic Gold / Bronze)
Secondary Accent:       #38bdf8 (Tech Cyan)
Text Main:              #f8fafc (Dark) | #0f172a (Light)
Text Muted:             #94a3b8 (Dark) | #64748b (Light)
Border Line:            #27272a (Dark) | #e2e8f0 (Light)
Fonts:                  Plus Jakarta Sans (Display Headings), Manrope (Prose), JetBrains Mono (Code/Metrics)
```

---

## 4. Technical Architecture for the Website

```
┌────────────────────────────────────────────────────────────────────────────┐
│                        index.html (Semantic Base)                          │
│        <title>Abisha J. | Computer Science Engineering Student</title>     │
└─────────────────────────────────────┬──────────────────────────────────────┘
                                      │
┌─────────────────────────────────────▼──────────────────────────────────────┐
│                               src/App.tsx                                  │
│ ┌────────────────────────────────────────────────────────────────────────┐ │
│ │  <header class="nav"> Navigation Bar (Brand, Links, Theme, Resume)    │ │
│ └────────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────────┐ │
│ │  <section id="hero"> Hero: Mesh Canvas, Typist, Portrait & Orbits      │ │
│ └────────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────────┐ │
│ │  <div class="metrics"> Milestone Metric Strip (CGPA, Projects, etc.)   │ │
│ └────────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────────┐ │
│ │  <section id="about"> About Me & 4 Interactive Core Pillars            │ │
│ └────────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────────┐ │
│ │  <section id="journey"> Vertical Education & Experience Timeline       │ │
│ └────────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────────┐ │
│ │  <section id="skills"> Categorized Technical Skills Bento Grid         │ │
│ └────────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────────┐ │
│ │  <section id="projects"> Featured Projects & Interactive Drawer        │ │
│ └────────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────────┐ │
│ │  <section id="achievements"> Competitions, Hackathons & Research       │ │
│ └────────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────────┐ │
│ │  <section id="certifications"> Certified Credentials & Courses         │ │
│ └────────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────────┐ │
│ │  <section id="contact"> Contact Form, Direct Email & Social Links      │ │
│ └────────────────────────────────────────────────────────────────────────┘ │
│ ┌────────────────────────────────────────────────────────────────────────┐ │
│ │  <footer class="footer"> Minimal Footer & Regional Attribution         │ │
│ └────────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Verification Checklist

- [ ] Ensure the site renders strictly as a public personal website with smooth anchor jumps.
- [ ] Verify profile picture `/public/assets/aistudio/profile_e2c918b2.jpeg` renders cleanly with orbital rings and correct aspect ratio.
- [ ] Verify resume download button triggers direct download of `/public/assets/aistudio/Abisha_J_Resume_f3a225a4.pdf`.
- [ ] Confirm dark and light themes toggle seamlessly with no contrast loss.
- [ ] Check responsive layout on desktop, tablet, and mobile.
- [ ] Run `compile_applet` and `lint_applet` to ensure zero compilation or lint errors.
