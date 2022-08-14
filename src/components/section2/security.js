import React from "react";
import SecurityLogo from "../../img/securitylogos.png";
export default function Security() {
  return (
    <>
      <section style={{ marginTop: "60px" }} id="security" className="mb-5">
        <div
          style={{ backgroundColor: "#E3FAF8", borderRadius: "20px" }}
          className="container p-5"
        >
          <div className="row d-flex align-items-center justify-content-between">
            <div className="col-md-8">
              <p
                className="my-3 fw-bold"
                style={{ color: "#E93A7D", fontSize: "16px" }}
              >
                SECURITY
              </p>
              <p className="my-3 fw-bold fs-4">
                You are in good hands. Scale, securely.
              </p>
              <p className="my-3" style={{ fontSize: "16px" }}>
                Growfin keeps your customer and finance data safe and secure to
                help you unblock working capital at enterprise scale.
              </p>
            </div>
            <div className="securitylogo col-md-4">
              <img src={SecurityLogo} alt="SecurityLogo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
