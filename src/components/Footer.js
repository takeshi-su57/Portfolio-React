import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaLinkedinIn,
  FaTelegram,
  FaDiscord,
  FaGithub,
  FaMailBulk,
} from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Takeshi Suzuki</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/takeshi-su57"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:takeshi.suzuki61@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaMailBulk />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/takeshi-suzuki-449636248/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://t.me/dia7552"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaTelegram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://discord.com/users/dia7552"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaDiscord />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
