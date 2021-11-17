import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import db from "../database/fakedb.json";

export default function Internships() {
  return (
    <div>
      <h1>Internships</h1>
      <CardGroup>
        {db.map((el) => {
          return (
            <div key={el.id} class="w-50">
              {el.type === "intership" ? (
                <Card>
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
                      <b>Closing date:</b>
                    </span>
                    {el["end-date"]}
                  </p>
                  <Button href={el.link}>Link</Button>
                </Card>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </CardGroup>
    </div>
  );
}
