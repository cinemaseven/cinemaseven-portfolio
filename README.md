# Francine Angela (Ella) | Portfolio

**Live Site:** https://cinemaseven.github.io/cinemaseven-portfolio/

Hi! This is my personal portfolio website showcasing my background, technical skills, experience, projects, certifications, and contact information. Built to present my work and development journey in one place, the portfolio provides an overview of my interests and the applications and websites I have contributed to.

## Overview

This portfolio is designed as a central place to explore my academic background, technical capabilities, project experience, and involvement in student organizations. It highlights selected projects, including full-stack web applications, mobile applications, and other collaborative work, while providing links to source repositories, live demonstrations, and professional profiles where available.

The website is intended for recruiters, potential collaborators, fellow developers, and anyone interested in learning more about my work.

## Features

- **Introduction / Hero section** – Presents a brief introduction and provides quick access to portfolio sections and contact links.
- **About section** – Shares background information, interests, and areas of computing I enjoy exploring.
- **Education** – Displays academic background, relevant coursework, and academic recognitions.
- **Experience** – Highlights involvement and responsibilities in student organizations and extracurricular activities.
- **Technical skills** – Organizes skills into categories such as programming languages, frameworks and platforms, databases, and development tools.
- **Project showcase** – Displays selected projects with descriptions, technologies used, roles, and available source-code or live-demo links.
- **GitHub repository integration** – Retrieves public repositories from the GitHub API and combines them with manually configured projects, including projects where I contributed.
- **Project pagination** – Organizes project cards into pages, with the number of visible projects adapting to screen size.
- **Certificates** – Lists completed certifications and courses with links to verification pages when available.
- **Contact section** – Provides ways to reach me through email and professional platforms.
- **Responsive layout** – Adjusts the layout and navigation for desktop and mobile screens.
- **Light and dark themes** – Allows visitors to switch between light and dark appearance, with the selected theme saved in local storage.
- **Interactive navigation** – Includes section navigation, active-section tracking, scroll progress, and animated reveal effects.

## Website Sections

| Section | Description |
|---|---|
| Home | Introduces the portfolio owner and provides navigation to the rest of the website. |
| About | Presents personal background, interests, and areas of focus. |
| Education | Shows academic history, coursework, and recognitions. |
| Experience | Highlights student organization roles and related responsibilities. |
| Skills | Lists technical skills grouped by category. |
| Projects | Showcases selected projects, contributions, technologies, and available links. |
| Certificates | Displays certifications and their verification links. |
| Contact | Provides contact information and links to professional profiles. |

## Built With

- **React** – Builds the website interface using reusable components.
- **Vite** – Provides the development server and production build process.
- **JavaScript (ES Modules)** – Handles application logic, content configuration, and interactive behavior.
- **HTML5** – Provides the page entry point and document structure.
- **CSS3** – Handles layout, responsive styling, themes, transitions, and animations.
- **GitHub REST API** – Retrieves public repository information for the project showcase.
- **GitHub Actions** – Automates the production build and deployment to GitHub Pages.

## Project Structure

```text
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment workflow
├── css/
│   └── style.css               # Main styles, themes, and responsive layouts
├── public/
│   ├── hero-image/             # Hero section images
│   ├── project-previews/       # Project preview images
│   ├── favicon.svg             # Website favicon
│   └── AlejandroFrancine-CurriculumVitae.pdf
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Icons.jsx
│   │   ├── Nav.jsx
│   │   ├── Projects.jsx
│   │   ├── SectionHead.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── site.js             # Editable portfolio content and project details
│   ├── App.jsx                 # Page composition and shared application state
│   └── main.jsx                # React application entry point
├── index.html                  # HTML document entry point
├── package.json                # Project scripts and dependencies
├── package-lock.json
└── vite.config.js              # Vite configuration
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Node.js 20 is used by the deployment workflow)
- npm (included with Node.js)
- Git (optional, for cloning the repository)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd portfolio
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Run Locally

Start the Vite development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal to view the portfolio.

### Build for Production

To generate an optimized production build:

```bash
npm run build
```

The generated website files will be placed in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Updating Portfolio Content

This portfolio is an ongoing project that I plan to update as I continue to develop my skills, gain experience, and work on new projects. I will continue adding projects, certifications, and experiences while refining the website's design and functionality to reflect my growth as a Computer Science student and aspiring developer.

## Deployment

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds and deploys the portfolio to GitHub Pages.

To deploy:

1. Push the project to the `main` branch of your GitHub repository.
2. Open the repository's **Settings**.
3. Select **Pages** from the sidebar.
4. Under **Build and deployment**, set the source to **GitHub Actions**.
5. Push a commit to `main`, or manually run the deployment workflow from the **Actions** tab.
6. Wait for the workflow to complete successfully.
7. Open the published website using the GitHub Pages URL shown in the deployment details.

The workflow installs dependencies using `npm ci`, runs `npm run build`, uploads the generated `dist/` directory, and deploys it to GitHub Pages.

## Future Improvements

- Add more projects and expand the descriptions of individual contributions.
- Improve project filtering so visitors can browse projects by technology or category.
- Add more detailed project case studies, including development processes and challenges.
- Continue refining accessibility, performance, and responsive behavior.
- Keep project links, repository information, and certificates updated.
- Expand the portfolio as new skills, projects, and experiences are gained.