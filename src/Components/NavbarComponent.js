import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import Home from "./Home";
import Scholarships from "./Scholarships";
import Fellowships from "./Fellowships";
import Internships from "./Internships";
import Research from "./Research";
import Filterpage from "./Filterpage";
import Searchbar from "./Searchbar";

export default function NavbarComponent() {
  return (
    <div>
      <Router>
        <div>
          <Navbar bg="dark" variant={"dark"} expand="lg">
            <Navbar.Brand style={{ margin: "8px" }} href="#home">
              Women Schemes
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/WomenSchemes"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/WomenSchemes/scholarships"}>
                  Scholarships
                </Nav.Link>
                {/* <NavDropdown as={Link} to={"/scholarships"} title="Scholarships" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Government</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Category</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">International</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                <Nav.Link as={Link} to={"/WomenSchemes/fellowships"}>
                  Fellowships
                </Nav.Link>
                <Nav.Link as={Link} to={"/WomenSchemes/internships"}>
                  Internships
                </Nav.Link>
                <Nav.Link as={Link} to={"/WomenSchemes/research"}>
                  Research
                </Nav.Link>
                <Nav.Link as={Link} to={"/WomenSchemes/filterpage"}>
                  Filterpage
                </Nav.Link>
              </Nav>
              <Searchbar />
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route exact path="/WomenSchemes" element={<Home />} />
            <Route
              exact
              path="/WomenSchemes/scholarships"
              element={<Scholarships />}
            />
            <Route
              exact
              path="/WomenSchemes/fellowships"
              element={<Fellowships />}
            />
            <Route
              exact
              path="/WomenSchemes/internships"
              element={<Internships />}
            />
            <Route exact path="/WomenSchemes/research" element={<Research />} />
            <Route
              exact
              path="/WomenSchemes/filterpage"
              element={<Filterpage />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

/*<Form style={{ margin: "8px" }} className="d-flex">
                <FormControl
                  class="searcbar"
                  type="search"
                  placeholder="Search here"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
              </Form>*/
