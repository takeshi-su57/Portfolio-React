import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

import bidout from "../../Assets/Projects/bidout.png";
import bonzo from "../../Assets/Projects/bonzo.png";
import leadaction from "../../Assets/Projects/leadaction.png";
import woofz from "../../Assets/Projects/woofz.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Successful <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on previous companies.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bidout}
              isBlog={false}
              title="BidOut"
              description="BidOut is the leading procurement platform in the energy industry. BidOut was formed out of the basic need for one platform that streamlines the procurement process and connects service providers directly to the buyers. BidOut’s mission is to put more control in the hands of the suppliers and streamline the bidding process for engineering, supply chain, and procurement on one easy-to-use platform."
              ghLink="#"
              demoLink="https://bidout.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={woofz}
              isBlog={false}
              title="Woofz"
              description="Woofz is a dog-training mobile application built with React Native."
              ghLink="#"
              demoLink="https://woofz.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bonzo}
              isBlog={false}
              title="Bonzo"
              description="Bonzo is an SMS marketing platform to help businesses streamline their operations related to the customer engagement and creating campaigns"
              ghLink="#"
              demoLink="https://getbonzo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leadaction}
              isBlog={false}
              title="Leadaction"
              description="LeadAction is a SaaS platform to help gyms close more leads with pwoerful text/SMS, email and sales automation. "
              ghLink="#"
              demoLink="leadaction.com"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <h1 className="project-heading">
          Personal <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently for fun.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/takeshis-su57/Chatify"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/takeshi-su57/Bits-Of-Codes"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/takeshi-su57/Editor.io"
              demoLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
