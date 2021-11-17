import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Scholarships
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Government
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Category
                  </a>
                </li>
                {/* <li><hr className="dropdown-divider" /></li> */}
                <li>
                  <a className="dropdown-item" href="#">
                    International
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Fellowships
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Internships
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Research
              </a>
            </li>
          </ul>
          {props.searchBar ? (
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <i class="bi bi-search"></i>
              <button className="btn btn-outline-primary" type="submit">
                Search{" "}
              </button>
            </form>
          ) : (
            ""
          )}

          <a
            class="btn btn-primary"
            style={{ margin: "7px" }}
            href="#"
            role="button"
          >
            Login/Signup
          </a>
        </div>
      </div>
    </nav>
  );
}

// Header.defaultProps = {
//     title:"WomenSchemes",
//     searchBar= true
// }
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool,
};
