import React from "react";
import db from "../database/fakedb.json";
import { CardGroup } from "react-bootstrap";
import CardsComp from "./CardComponent";

export default function Scholarships() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "4px" }}>Scholarships</h1>
      <div>
      <CardGroup>
        {db.map((el) => {
          return (
          <>
          {el.type==="scholarship"  ?(
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
