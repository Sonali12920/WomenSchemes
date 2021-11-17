import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom"

import Home from './Home'
import Scholarships from './Scholarships'
import Fellowships from './Fellowships'
import Internships from './Internships'
import Research from './Research'


export default function NavbarComponent() {
    return (
        <div>
            <Router>
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand style ={{ margin:"8px" }} href="#home">Women Schemes</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/scholarships"}>Scholarships</Nav.Link>
                                {/* <NavDropdown as={Link} to={"/scholarships"} title="Scholarships" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Government</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Category</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">International</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                                <Nav.Link as={Link} to={"/fellowships"}>Fellowships</Nav.Link>
                                <Nav.Link as={Link} to={"/internships"}>Internships</Nav.Link>
                                <Nav.Link as={Link} to={"/research"}>Research</Nav.Link>
                            </Nav>
                            <Form style ={{ margin:"8px" }} className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search here"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-primary">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/scholarships" element={<Scholarships />} />
                        <Route exact path="/fellowships" element={<Fellowships />} />
                        <Route exact path="/internships" element={<Internships />} />
                        <Route exact path="/research" element={<Research />} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}
