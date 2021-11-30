import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "../styles/searchbar.css";

function Searchbar() {
  return (
    <>
      <div className="searchbar">
        <Form style={{ margin: "8px" }} className="d-flex">
          <FormControl
            type="search"
            placeholder="Search here..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </div>
    </>
  );
}

export default Searchbar;
/*
 {db.map((el) => {
            return (
              <>
                <a
                  href="./scholarships"
                  target="_parent"
                  style={{ color: "black" }}
                >
                  <p>{el.name}</p>
                </a>
              </>
            );
          })}
          */
