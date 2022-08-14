import React from "react";
import CashCounter from "../../img/Cash Counter.png";
import Intelligence from "../../img/Intelligence.png";
import Museum from "../../img/Museum.png";

export default function Features() {
  return (
    <>
      <section id="features" style={{ backgroundColor: "#E1F5FE" }} className="p-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md">
              <div className="text-dark">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <img src={CashCounter} alt="Cash Counter" />
                  </div>
                  <p className="card-text">
                    <strong>
                      Accelerate your cash <br /> inflow and reduce DSO <br />{" "}
                      by at least 10%
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="text-dark">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <img src={Intelligence} alt="Intelligence" />
                  </div>
                  <p className="card-text">
                    <strong>
                      {" "}
                      Improve productivity of <br /> sales and finance teams{" "}
                      <br /> by 50%
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="text-dark">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <img src={Museum} alt="Museum" />
                  </div>
                  <p className="card-text">
                    <strong>
                      Improve capital & <br /> reduce overall <br /> outstanding
                      invoices
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
