import React from "react";
import { Card } from "react-bootstrap";
import db from "../database/fakedb.json";
function comparedates(date) {
  var today = new Date();
  const date1 = new Date(date);
  const date2 = new Date(today);
  const diffTime = -(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(diffDays);
  return diffDays;
}

function Archive() {
  return (
    <div>
      <h5 className="text-center">Archives -</h5>
      {db.map((data) => {
        return comparedates(data.end_date) <= 0 ? (
          <Card>
            <a href={data.link}>{data.name}</a>
          </Card>
        ) : null;
      })}
    </div>
  );
}

export default Archive;
