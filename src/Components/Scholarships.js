import React from "react";
import db from "../database/items.json";
import "../styles/CardComponent.css";
import { Card, Button, CardGroup } from "react-bootstrap";

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
    </div>
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
