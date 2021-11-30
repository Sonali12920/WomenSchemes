import React, { useCallback } from "react";
import db from "../database/fakedb.json";
import Filter from "./Filters";
import { useFilter } from "../utility/useFilter";
import CardComp from "../Components/CardComponent";
import { CardGroup } from "react-bootstrap";
import Noresult from "../images/download.jfif";

function filteringcards(db, filters) {
  let res = [...db];
  //console.log(db);
  if (filters.scholarship) {
    res = res.filter((el) => {
      return el.type === "scholarship";
    });
  }
  if (filters.internship) {
    res = res.filter((el) => {
      return el.type === "internship";
    });
  }
  if (filters.fellowship) {
    res = res.filter((el) => {
      return el.type === "fellowship";
    });
  }
  if (filters.research) {
    res = res.filter((el) => {
      return el.type === "research";
    });
  }
  // console.log(res);
  return res;
}

const Filterpage = () => {
  const [filter, dispatchFilter] = useFilter({
    scholarship: false,
    internship: false,
    fellowship: false,
    research: false,
  });
  const filteredcards = filteringcards(db, filter);
  //console.log(filteredcards);

  const onCheckClick = useCallback(
    (ev) => {
      const checkbox = ev.target;

      dispatchFilter({
        type: "SET",
        filterName: checkbox.name,
        value: checkbox.checked,
      });
    },
    [dispatchFilter]
  );
  return (
    <div>
      <h5>Filter </h5>
      <div class="filterblock">
        <p>Type: </p>
        <Filter
          id="scholarship"
          name="scholarship"
          label="Scholarship"
          checked={filter.scholarship}
          onChange={onCheckClick}
        />
        <Filter
          id="internship"
          name="internship"
          label="Internship"
          checked={filter.internship}
          onChange={onCheckClick}
        />
        <Filter
          id="fellowship"
          name="fellowship"
          label="Fellowship"
          checked={filter.fellowship}
          onChange={onCheckClick}
        />
        <Filter
          id="research"
          name="research"
          label="Research"
          checked={filter.research}
          onChange={onCheckClick}
        />
      </div>
      <div>
        {filteredcards.length === 0 ? (
          <span style={{ color: "red" }}>
            <img src={Noresult} alt="No Results..." width="200px" />
          </span>
        ) : (
          <div>
            <CardGroup>
              {filteredcards.map((el) => {
                return <>{CardComp(el)}</>;
              })}
            </CardGroup>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filterpage;
