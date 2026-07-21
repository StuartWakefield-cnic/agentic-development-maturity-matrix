import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
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
    </footer>
  );
}
