import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "../styles/searchbar.css";
import db from "../database/fakedb.json";
function Searchbar() {
  const [filterdata, setFilterdata] = useState([]);
  const handleFilter = (event) => {
    const searchword = event.target.value;
    const newfilter = db.filter((value) => {
      return value.title
        .toString()
        .toLowerCase()
        .includes(searchword.toString().toLowerCase());
    });
    if (searchword === "") {
      setFilterdata([]);
    } else setFilterdata(newfilter);
  };

  return (
    <div>
      <div className="searchbar">
        <Form style={{ margin: "8px" }} className="d-flex">
          <FormControl
            type="search"
            placeholder="Search here..."
            className="me-2"
            aria-label="Search"
            onChange={handleFilter}
          />
          <Button variant="outline-primary">Search</Button>
        </Form>
      </div>
      {filterdata.length !== 0 && (
        <div className="dataResults">
          {filterdata.slice(0, 15).map((value, key) => {
            return (
              <a
                className="dataItems"
                href={value.link}
                target="_blank"
                rel="noreferrer"
              >
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
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
