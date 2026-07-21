import React from "react";
import { withPrefix } from "gatsby";
import Container from "./ui/Container";

export default function Footer() {
  return (
    <footer>
      <Container>
        <img
          className="footer-logo"
          src={withPrefix("/images/team-internet-logo.svg")}
          alt="Team Internet"
        />
        <div className="footer-text">
          <span>Assessment state is saved locally in your browser. Nothing is sent anywhere.</span>
          <span>
            Built July 2026 · Companion to the{" "}
            <a
              href="https://stuartwakefield-cnic.github.io/continuous-delivery-maturity-matrix/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Continuous Delivery Maturity Matrix
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
}
