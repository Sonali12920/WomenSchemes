import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import db from "../database/fakedb.json";
function comparedates(date) {
  var today = new Date();
  const date1 = new Date(date);
  const date2 = new Date(today);
  let diffTime = 0;
  if (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() <= date2.getMonth()
  ) {
    diffTime = -(date2 - date1);
  } else {
    diffTime = Math.abs(date2 - date1);
  }
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  //console.log(diffDays);
  return diffDays;
}

const Archive = ({ schemetypes }) => {
  ///console.log(schemetypes);
  return (
    <div>
      <h5 className="text-center">Archives -</h5>
      <ListGroup>
        {db.map((data) => {
          return data.type === schemetypes.toString() &&
            (comparedates(data.deadline) <= 0 ||
              comparedates(data.end_date) <= 0) ? (
            <ListGroupItem action tag="a" href={data.link} color="info">
              {data.title}
            </ListGroupItem>
          ) : null;
        })}
      </ListGroup>
    </div>
  );
};

export default Archive;
