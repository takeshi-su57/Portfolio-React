import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Takeshi Suzuki </span>
            from <span className="purple"> Toronto, Canada.</span>
            <br />I am a result-oriented{" "}
            <span className="purple">senior software engineer</span> with 7
            years of professional experience in{" "}
            <span className="purple">web development</span>
            <br />
            Expert in{" "}
            <span className="purple">
              Typescript, Node.js, React.js, Angular, Nest.js, Express.js,
              PostgreSQL,{" "}
            </span>
            and <span className="purple">MongoDB</span>.
            <br />
            Proficient in using various programming languages, including{" "}
            <span className="purple">Python, PHP, C#, Ruby on Rails</span>, and
            <span className="purple"> Django</span>.
            <br />
            Experience with DevOps Technologies including{" "}
            <span className="purple">AWS, GCP, Docker</span> and{" "}
            <span className="purple">CI/CD</span>.
            <br />
            Adheres to best practices, produces clean, maintainable code, and
            meets deadlines.
            <br />
            Able to effectively self-manage on independent projects and
            collaborate well in a team environment.
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Marathon
            </li>
            <li className="about-activity">
              <ImPointRight /> Fishing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you do a few things incredibly well, the rest doesn't really
            matter."{" "}
          </p>
          <footer className="blockquote-footer">I believe</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
