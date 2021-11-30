import React from "react";
import db2 from "../database/items.json";
import db from "../database/boldtable.json";
import "../styles/CardComponent.css";
import { Card, Button, CardGroup } from "react-bootstrap";

function comparedates(date) {
  var today = new Date();
  const date1 = new Date(date);
  const date2 = new Date(today);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

export default function Scholarships() {
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "4px" }}>Scholarships</h1>
      <div>
        <CardGroup>
          {db.map((el) => {
            return (
              <>
                {/* {el.type === "scholarship" && comparedates(el["end-date"]) > 0  ? ( */}
                <div class="w-50" className="col-sm-4">
                  <Card className="card">
                    <h4>{el.title}</h4>
                    <p>{el.content}</p>
                    <p>
                      <span>
                        <b>Amount: </b>
                      </span>
                      {el.amount}
                    </p>
                    <p>
                      <span>
                        <b>Available: </b>
                      </span>
                      {comparedates(el.deadline)} days to go
                    </p>

                    <Button class="btn btn-primary" href={el.links}>
                      Link
                    </Button>
                  </Card>
                </div>
                {/* ) : null} */}
              </>
            );
          })}
        </CardGroup>
      </div>
      <CardGroup>
          {db2.map((el) => {
            return (
              <>
                {/* {el.type === "scholarship" && comparedates(el["end-date"]) > 0  ? ( */}
                <div class="w-50" className="col-sm-4">
                  <Card className="card">
                    <h4>{el.title}</h4>
                    <p>{el.content}</p>
                    {/* <p>
                      <span>
                        <b>Amount: </b>
                      </span>
                      {el.amount}
                    </p>
                    <p>
                      <span>
                        <b>Available: </b>
                      </span>
                      {comparedates(el.deadline)} days to go
                    </p> */}

                    <Button class="btn btn-primary" href={el.links}>
                      Link
                    </Button>
                  </Card>
                </div>
                {/* ) : null} */}
              </>
            );
          })}
        </CardGroup>
    </div >
  );
}

// import React from "react";
// import db from "../database/fakedb.json";
// import { CardGroup } from "react-bootstrap";
// import CardsComp from "./CardComponent";

// export default function Scholarships() {
//   return (
//     <div>
//       <h1 style={{ textAlign: "center", margin: "4px" }}>Scholarships</h1>
//       <div>
//       <CardGroup>
//         {db.map((el) => {
//           return (
//           <>
//           {el.type==="scholarship"  ?(
//              CardsComp(el)
//           ) :null}
//           </>
//           );
//         })}
//       </CardGroup>
//     </div>
//     </div>
//   );
// }
