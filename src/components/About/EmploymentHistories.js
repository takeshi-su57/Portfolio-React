import React from "react";
import { Container } from "react-bootstrap";

import EmploymentHistory from "./EmploymentHistory";

function EmploymentHistories() {
  const histories = [
    {
      id: 1,
      role: "Senior Full Stack Engineer",
      company: "BidOut",
      companyUrl: "https://bidout.app",
      period: "May 2021 - July 2023 (2 years)",
      summary:
        "BidOut is the leading procurement SaaS platform in the energy industry that connects service providers directly to buyers, streamlining the bidding process and putting more control in the hands of suppliers.",
      achievements: [
        "Collaborated closely with product and sales teams to develop and launch admin dashboard and RFx platform using Nuxt.js, Vue3, Typescript and MongoDB over 13 months.",
        "Successfully migrated frontend from Vue2 to Vue3 and backend Node.js to Typescript and extended MVP to MMP while leveraging appropriate indexing and denormalization structures.",
        "Built 50+ highly responsive and adaptable UI components and implemented effective and clean data flow on pages using Vue3, Vuex, Vuetify and SCSS.",
        "Created 30+ APIs that maintain best practices of REST and utilize appropriate caching strategies to reduce API response time and server load.",
        "Leveraged Auth0 Single Sign On to enhance security and UX and integrated more than 4 third-party platforms for SMS and payment functions.",
      ],
      skills: {
        Frontend: [
          "Typescript",
          "Vue3",
          "Nuxt.js",
          "Vuetify",
          "SCSS",
          "Storybook.js",
        ],
        Backend: [
          "Typescript",
          "Express.js",
          "MongoDB",
          "Mongoose ORM",
          "RESTful service",
        ],
        "Third-party platforms": ["GCP", "Stripe", "Twilio", "Auth0"],
      },
    },
    {
      id: 2,
      role: "Senior Web & Mobile Engineer",
      company: "TechGropse",
      companyUrl: "https://www.techgropse.com/",
      period: "December 2020 — August 2022 (1year 9 months)",
      summary:
        "Recruited by Founder/CEO to scale engineering team of startup building high-performance and visually appealing software following B-round funding.",
      achievements: [
        "Developed a mobile application Woofz across a PWA version to iOS and Android apps using React Native, Typescript, Java, Kotlin, and NativeWind for 6 months.",
        "Utilized Kotlin expertise to seamlessly integrate React native with native platform APIs, (Camera API, Location API, Calendar API), enhancing overall functionality and user experience for Woofz",
        "Through serverless architecture, scaled API service performance and reduced platform operating costs from $4,000 to $1,000 per month.",
        "Mentored two engineers for a month onboarding period, performed ticket management and code reviews and completed two key functions on time.",
      ],
      skills: {
        Frontend: [
          "Typescript",
          "React Native",
          "NativeWind",
          "CSS",
          "Jest",
          "Playwright",
        ],
        Backend: ["Typescript", "Java", "Nest.js", "GraphQL", "PostgreSQL"],
        "Third-party platforms": ["Twilio", "Stripe", "AWS"],
      },
    },
    {
      id: 3,
      role: "Full stack Vue.js & Node.js Engineer",
      company: "Hilo Labs",
      companyUrl: "https://hilolabs.com/",
      period: "July 2019 — October 2020 (1year 2months)",
      summary:
        "Hilo Labs is a startup focused on web, blockchain, and AI development. Joined the Bonzo development team and built an SMS marketing platform.",
      achievements: [
        "Launched Bonzo for 13 months that is a SaaS solution designed to help businesses streamline operations related to customer engagement and creating campaigns.",
        "Integrated 6+ third-party platforms such as Bandwidth, Stripe, GCP, Firebase, and Meta mask for crypto payments to enable subscription, message scheduling, and auto-responding capabilities for SMS.",
        "Wrote RESTful APIs with Express.js and MongoDB, resulting in raised stability by 15% through the utilization of Swagger Open API 3.",
        "Created a user-friendly dashboard and campaign page using Vue and Quasar, while presenting more than 30 improved suggestions.",
      ],
      skills: {
        Frontend: ["Typescript", "Vue2", "Quasar", "SCSS", "Jest", "Cypress"],
        Backend: [
          "Typescript",
          "Express.js",
          "MongoDB",
          "RESTful",
          "PHP",
          "WordPress",
          "Auth0",
        ],
        "Third-party platforms": [
          "AWS",
          "Stripe",
          "Twilio",
          "Bandwidth",
          "Meta mask",
        ],
      },
    },
    {
      id: 4,
      role: "Frontend Developer",
      company: "LeadAction",
      companyUrl: "https://leadaction.com/",
      period: "January 2019 — June 2019 (6 months)",
      summary:
        "LeadAction is a SaaS solution for helping gyms close more leads with powerful text/SMS, email and sales automation.",
      achievements: [
        "Transformed a Figma design into a pixel-perfect and fully responsive web application using Angular and Material design over 6 months.",
        "Used the latest front-end technologies such as shared service and WebRTC, resulting in a 30% improvement in web development speed.",
        "Tracked issues and tasks using ClickUp with the use of the Kanban board.",
        "Boosted the product's overall performance by 46% using JavaScript performance optimizations.",
      ],
      skills: {
        Frontend: [
          "Angular",
          "RxJS",
          "WebRTC",
          "Angular Material",
          "SCSS",
          "Figma",
          "Vercel",
        ],
      },
    },
    {
      id: 5,
      role: "Junior Software Developer",
      company: "Senda Japan Ltd",
      companyUrl: "http://www.sendajapan.com/",
      period: "August 2016 — January 2019 (2years 5months)",
      summary:
        "Senda Japan Ltd is a digital creative IT agency that has successfully completed numerous projects for clients across a variety of business sectors.",
      achievements: [
        "Completed more than five projects, including three eCommerce websites and two mobile apps used by over four million users.",
        "Contributed to the development of Ameba, a national media service that collects real-time content including the latest celebrity news, manga, fortune-telling, and the Ameba blog.",
        "Utilized various technologies such as Django, MySQL, Python, React v15.0, and Node.js in the development process.",
      ],
      skills: {
        Frontend: ["React", "Node.js", "CSS3", "HTML5", "Figma"],
        Backend: [
          "Python",
          "Django",
          "MySQL",
          "NumPy",
          "Pandas",
          "SciPy",
          "Postman",
        ],
      },
    },
  ];

  return (
    <Container style={{ margin: "20px 0" }}>
      {histories.map((history) => (
        <EmploymentHistory
          key={history.id}
          role={history.role}
          company={history.company}
          companyUrl={history.companyUrl}
          period={history.period}
          summary={history.summary}
          achievements={history.achievements}
          skills={history.skills}
        />
      ))}
    </Container>
  );
}

export default EmploymentHistories;
