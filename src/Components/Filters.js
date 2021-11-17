import React from "react";

function Filters() {
  return (
    <div class="container">
      Filter
      <ul class="list-group">
        <li class="list-group-item">
          <div>
            Type:
            <ul class="list-group">
              <li class="list-group-item">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Scholarship
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Fellowships
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Internships
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Research
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li class="list-group-item">
          <div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                National
              </label>
            </div>
          </div>
          <div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="form-check-label" for="flexCheckDefault">
                International
              </label>
            </div>
          </div>
        </li>
      </ul>
      <ul class="list-group">
        <li class="list-group-item">
          Current Level
          <ul class="list-group">
            <li class="list-group-item">
              <div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Undergraduate
                  </label>
                </div>
              </div>
              <div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Postgraduate
                  </label>
                </div>
              </div>
              <div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Phd
                  </label>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default Filters;
