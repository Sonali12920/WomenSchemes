import React from "react";
import { CardGroup } from "react-bootstrap";
import db from "../database/fakedb.json";
import CardsComp from "./CardComponent";
import "../styles/CardComponent.css";

export default function Fellowships() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "4px" }}>Fellowships</h1>
      <div>
        <CardGroup>
          {db.map((el) => {
            return <>{el.type === "fellowship" ? CardsComp(el) : null}</>;
          })}
        </CardGroup>
      </div>
    </div>
  );
}

// import React from 'react'

// export default function Fellowships() {
//     return (
//         <div>
//             <h1>Scholarhsips</h1>
//         </div>
//     )
// }
