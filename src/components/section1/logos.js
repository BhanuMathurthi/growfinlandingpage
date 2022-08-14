import React from "react";
import pepperContent_logo from "../../img/logo_pepperContent.png";
import Whatfix_logo from "../../img/logo-whatfix.png";
import Locus_logo from "../../img/Locuslogo.png";
import darwinbox_logo from "../../img/logo-darwinbox.png";
import mindtickle_logo from "../../img/logo-mindtickle.png";
import intercom_logo from "../../img/logointercom.png";

export default function Logos() {
  return (
    <div>
      <section id="whygrowfin" className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div
                className="test card fw-bold"
                style={{
                  padding: "32px 30px 27px 30px",
                  width: "15rem",
                  backgroundColor: "#00D4C7",
                  borderRadius: "20px",
                }}
              >
                <p style={{ fontSize: "18px" }} className="text-white">
                  Fast-growing <br /> startups, unicorns <br /> and large
                  enterprises <br />{" "}
                  <span className="text-dark">
                    across the globe use <br /> Growfin
                  </span>
                </p>
              </div>
            </div>
            <div
              style={{ margin: "75px 0px 0px 0px" }}
              className="firstset col-md-3"
            >
              <img
                width="100"
                height="30"
                src={pepperContent_logo}
                alt="pepperContent_logo"
              />{" "}
              <br />
              <br />
              <img
                width="100"
                height="30"
                src={darwinbox_logo}
                alt="darwinbox_logo"
              />
            </div>
            <div
              style={{ margin: "75px 0px 0px 0px" }}
              className="secondset col-md-3"
            >
              <img
                width="100"
                height="30"
                src={Whatfix_logo}
                alt="Whatfix_logo"
              />
              <br />
              <br />
              <img
                width="80"
                height="20"
                src={mindtickle_logo}
                alt="mindtickle_logo"
              />
            </div>
            <div
              style={{ margin: "75px 0px 0px 0px" }}
              className="thirdset col-md-2"
            >
              <img width="100" height="30" src={Locus_logo} alt="Locus_logo" />
              <br />
              <br />
              <img
                width="100"
                height="30"
                src={intercom_logo}
                alt="intercom_logo"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
