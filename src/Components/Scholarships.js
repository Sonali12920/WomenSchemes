import React from "react";
import db from "../database/fakedb.json";
import { Card, Button, CardGroup } from "react-bootstrap";
// import "../styles/Card.css";

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
                {el.type === "scholarship" && comparedates(el["end-date"]) > 0  ? (
                  <div key={el.id} class="w-50" className="col-sm-4">
                    <Card className="card">
                      <h4>{el.name}</h4>
                      <p>{el.desc}</p>
                      <p>
                        <span>
                          <b>Apply date:</b>
                        </span>
                        {el["apply-date"]}
                      </p>
                      <p>
                        <span>
                          <b>Available: </b>
                        </span>
                        {comparedates(el["end-date"])} days to go
                        {/* {comparedates(el["end-date"]) > 0
                        ? `${comparedates(el["end-date"])} days to go `
                        : "Closed."} */}
                      </p>
                      <Button class="btn btn-primary" href={el.link}>
                        Link
                      </Button>
                    </Card>
                  </div>
                ) : null}
              </>
            );
          })}

        </CardGroup>
      </div>
    </div>
  );
}


// import React from "react";
// import { Card, Button, CardGroup } from "react-bootstrap";
// import db from "../database/fakedb.json";
// import "../styles/CardComponent.css";

// function comparedates(date) {
//   var today = new Date();

//   const date1 = new Date(date);
//   const date2 = new Date(today);
//   const diffTime = Math.abs(date2 - date1);
//   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
//   return diffDays;
// }
// export default function Scholarships() {
//   return (
//     <div>
//       <h1 style={{textAlign:"center", margin:"4px"}}>Scholarships</h1>
//       <CardGroup className="card-group" >
//         {db.map((el) => {
//           return (
//             <div key={el.id} class="w-50">
//               {el.type === "scholarship" && comparedates(el["end-date"]) > 0  ? (
//                 <Card className="card">
//                   <h4>{el.name}</h4>
//                   <p>{el.desc}</p>
//                   <p>
//                     <span>
//                       <b>Apply date:</b>
//                     </span>
//                     {el["apply-date"]}
//                   </p>
//                   <p>
//                     <span>
//                       <b>Available: </b>
//                     </span>
//                     {comparedates(el["end-date"])} days to go
//                     {/* {comparedates(el["end-date"]) > 0
//                       ? `${comparedates(el["end-date"])} days to go `
//                       : "Closed."} */}
//                   </p>
//                   <Button class="btn btn-primary" href={el.link}>
//                     Apply Now
//                   </Button>
//                 </Card>
//               ) : (
//                 ""
//               )}
//             </div>
//           );
//         })}
//       </CardGroup>
//     </div>
//   );
// }







// import React from 'react'

// export default function Scholarhsips() {
//     return (
//         <div>
//             <h1>Scholarhsips</h1>

//         </div>
//     )
// }
