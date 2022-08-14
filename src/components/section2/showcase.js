import React from "react";
import featureImg from "../../img/Mask_group.png";

export default function Showcase() {
  return (
    <>
      <section className="p-4">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 d-flex align-items-center">
              <img
                src={featureImg}
                loading="lazy"
                alt="featureImg"
                className="featuredImg img-fluid w-100 d-sm-block"
              />
            </div>

            <div className="col-lg-6 my-sm-5 d-flex flex-column justify-content-center">
              <div className="content">
                <p className="fs-4">
                  <strong>
                    <span style={{ color: "#00CFC2" }}>Growfin can</span>{" "}
                    reconcile data <br /> across different systems in <br />{" "}
                    real-time
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
