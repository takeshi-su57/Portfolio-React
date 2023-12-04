import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function EmploymentHistory({
  role,
  company,
  companyUrl,
  period,
  summary,
  achievements,
  skills,
}) {
  return (
    <Container style={{ marginBottom: "30px", textAlign: "left" }}>
      <Row>
        <Col>
          <h3 className="purple">{role}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href={companyUrl} style={{ color: "white" }}>
            <h5>
              <i>{company}</i>
            </h5>
          </a>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ color: "rgb(155 126 172)" }}>{period}</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{summary}</p>
        </Col>
      </Row>
      <Row>
        <Container>
          <Row>
            <Col>
              <h4>Achievements</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <ul>
                {achievements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </Row>
      {Object.keys(skills).map((skillGroup) => {
        return (
          <Row key={skillGroup} style={{ marginBottom: "20px" }}>
            <Col md={3}>
              <h5>{skillGroup}:</h5>
            </Col>
            <Col style={{ display: "flex", gap: "20px" }}>
              {skills[skillGroup].map((item) => (
                <Card key={item} className="project-card-view" style={{}}>
                  {item}
                </Card>
              ))}
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}

export default EmploymentHistory;
