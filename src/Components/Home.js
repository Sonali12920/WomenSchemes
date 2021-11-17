import React from "react";
import Filters from "./Filters";
import Header from "./Header"
import "../App.css";

export default function Home() {
  return (
    <div>
      <div class="container-fluid">
        <Header />
        <div class="row">
          <div class="col-3">
            <Filters />
          </div>
        </div>
      </div>
    </div>
  );
}
