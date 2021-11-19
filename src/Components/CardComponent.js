import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
import data from "../database/fakedb.json";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export default function CardComponent() {

    // const [data, setData] = useState([]);
    // const getData = async () => {
    //     const response = await fetch("../database/fakedb.json");
    //     setData(await response.json());
    // };

    // useEffect(() => {
    //     getData();
    // }, []);


    return (
      <div>
        <h1>Scholarships</h1>
        {data.map((curElem, index) => {
          return (
            <div>
              {curElem.type === "scholarships" ? (
              <Card>
                <Card.Img variant="top" src="https://picsum.photos/200/300" style={{height:"150px"}} />
                <Card.Body>
                  <Card.Title>{curElem.name}</Card.Title>
                  <Card.Subtitle>{curElem.name}</Card.Subtitle>
                  <Card.Text>
                    {curElem.desc}
                  </Card.Text>
                  <Button variant="primary">Apply now</Button>
                </Card.Body>
              </Card>
              ) : (
                ""
                )}
            </div>
          )
        })}
  
      </div>
    )
  
  }
