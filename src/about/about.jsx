import React, { Component } from "react";

class About extends Component {
  //state = {  }
  render() {
    return (
      <React.Fragment>
        <div className="container p-5">
          <h1>About Art</h1>
          <div class="accordion p-5" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Introduction
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  This art is made from putting together the colored mats of
                  wheat stem on a background of wood or particle boards.
                </div>
                <img
                  src="https://via.placeholder.com/350x50"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Application
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  For decoration on tables surfaces, Buffets, Partitions
                  (Paravent), wooden doors, chair rests, commodes, dressers, or
                  any other piece of equipment made of wood. It is also used on
                  pillar, top of fireplaces for home decoration. This art can be
                  supplied as a tableau covered by glass or kept for display in
                  a glassed container like buffets or glass tables
                </div>{" "}
                <img
                  src="https://via.placeholder.com/350x50"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    About Art
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  First of all, the top quality wheat stems are sorted out,
                  then, having dyed, flattened and polished by special
                  customized various methods, and also, applying miniature
                  designs on the interface, the impression is created and ready
                  after finishing polish.
                </div>
                <img
                  src="https://via.placeholder.com/350x50"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
