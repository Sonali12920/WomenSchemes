import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="main-Footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              <li>
                <a className="nav-link" href="/scholarships">
                  Scholarships
                </a>
              </li>
              <li>
                <a className="nav-link" href="/internships">
                  Internships
                </a>
              </li>
              <li>
                <a className="nav-link" href="/fellowships">
                  Fellowships
                </a>
              </li>
              <li>
                <a className="nav-link" href="/research">
                  Research
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Web Development Team | All rights
            reserved | Terms of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}
