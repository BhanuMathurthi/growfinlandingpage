import React from "react";
import MainBannerImage from "../../img/mainbanner.png";

export default function HeaderContent() {
  return (
    <>
      <section
        id="Header"
        style={{
          marginTop: "3rem",
          backgroundColor: "#042D41",
          borderRadius: "0px 0px 50px 50px",
        }}
        className="text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start"
      >
        <div style={{ paddingBottom: "3rem" }} className="container intro">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1 className="fs-1 mt-5 fw-bold">
                B2B Receivables is tricky. <br /> Here’s why.
              </h1>
              <p
                className="subtitle"
                style={{ marginTop: "2rem", marginBottom: "4rem" }}
              >
                Managing collection targets while also building strong <br />
                relationships with customers is no mean feat. Growfin <br />{" "}
                lets you do this and more.
              </p>
              <p
                className="subtitle"
                style={{ color: "#00D4C7", marginBottom: "0.8rem" }}
              >
                Get a 30-minute overview of Growfin
              </p>
              <div
                style={{
                  paddingRight: "0.6rem",
                  maxWidth: "380px",
                }}
                className="buttoninput input-group mb-3 mb-5 bg-white rounded"
              >
                <input
                  style={{ border: "none" }}
                  type="text"
                  className="form-control"
                  placeholder="Enter your Email address"
                  aria-label="Enter your Email address"
                />
                <div className="input-group-append my-2">
                  <button
                    style={{ backgroundColor: "#E93A7D", border: "none" }}
                    className="btn text-white"
                    type="button"
                  >
                    Get a demo
                  </button>
                </div>
              </div>
            </div>

            <img
              src={MainBannerImage}
              className="img-fluid w-50 d-sm-block"
              loading="lazy"
              alt="HeaderImage"
            />
          </div>
        </div>
      </section>
    </>
  );
}
