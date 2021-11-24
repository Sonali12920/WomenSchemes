import React from "react";
import db from "../database/fakedb.json";
import { CardGroup } from "react-bootstrap";
import CardsComp from "./CardComponent";

export default function Internships() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "4px" }}>Internships</h1>
      <div>
      <CardGroup>
        {db.map((el) => {
          return (
          <>
          {el.type==="internship"  ?(
             CardsComp(el)
          ) :null}
          </>
          );
        })}
      </CardGroup>
    </div>
    </div>
  );
}
