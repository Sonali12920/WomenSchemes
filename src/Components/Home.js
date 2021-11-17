import React from "react";
import Filters from "./Filters";

export default function Home() {
  return (
    <div>
      <div class="container-fluid">
        Home
        <div class="row">
          <div class="col-3">
            <Filters />
          </div>
        </div>
      </div>
    </div>
  );
}
