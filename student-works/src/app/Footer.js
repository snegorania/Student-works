import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <nav class="footer-nav">
        <ul class="footer-nav-list">
          <li class="footer-nav-item">
            <a class="footer-link" aria-current="page" href="#">
              Students
            </a>
          </li>
          <li class="footer-nav-item">
            <a class="footer-link" href="#">
              Groups
            </a>
          </li>
          <li class="footer-nav-item">
            <a class="footer-link" href="#">
              Topics
            </a>
          </li>
        </ul>
        <p class="footer-copyrite">&copy; Student works 2023</p>
      </nav>
    </footer>
  );
}

export default Footer;
