import React from "react";
import { FaMinusCircle } from "react-icons/fa";

export default function Collections() {
  return (
    <>
      <section id="integrations">
        <div className="container d-flex justify-content-between pb-5">
          <div className="row">
            <div className="col-md-5 my-5">
              <h5
                style={{ fontSize: "16px" }}
                className="shadow p-3 mb-3 fw-bold bg-body rounded"
              >
                Collection Strategy
              </h5>
              <div className="shadow p-3 mb-3 bg-body rounded">
                <h5
                  style={{ fontSize: "16px" }}
                  className="card-title fw-bold mb-3"
                >
                  Realtime Receivables Tracking
                </h5>
                <p style={{ fontSize: "15px" }}>
                  Prioritize accounts with real time visibility on <br /> aging,
                  payment status, customer responses <br /> and collection
                  activities.
                </p>
              </div>
              <h5
                style={{ fontSize: "16px" }}
                className="shadow p-3 fw-bold mb-5 bg-body rounded"
              >
                Collaborative Collections
              </h5>
            </div>
            <div className="col-md-7 mt-5">
              <div
                style={{ backgroundColor: "#f9f9f9" }}
                className="d-flex justify-content-between align-items-center px-3 pt-3 pb-1 shadow"
              >
                <h5 className="fw-bold" style={{ fontSize: "16px" }}>
                  New Customer Segment
                </h5>
                <div className="">
                  <button
                    style={{
                      border: "none",
                      backgroundColor: "#f9f9f9",
                      color: "#722ED1",
                    }}
                  >
                    Cancel
                  </button>{" "}
                  &nbsp; &nbsp;
                  <button
                    style={{ border: "none", backgroundColor: "#722ED1" }}
                    className="text-white btn"
                  >
                    Save
                  </button>
                </div>
              </div>
              <form
                // onSubmit={handleSubmit}
                // ref={form}
                className="p-4 bg-white shadow p-3 mb-5"
                autoComplete="off"
              >
                <div className="form-group mb-2 text-dark">
                  <label htmlFor="title">
                    Title <span className="text-danger my-1">*</span>
                  </label>
                  <input
                    // ref={userRef}
                    type="text"
                    id="title"
                    placeholder="High Value Customers"
                    // name="title"
                    // value={firstname || ""}
                    className="form-control"
                    autoComplete="off"
                    // onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mb-2 text-dark">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name=""
                    rows="4"
                    cols="64"
                    className="form-control mb-2"
                    placeholder="Customers with more than 100000 USD in Annual Contact Value"
                  ></textarea>
                </div>
                <div className="form-group mb-2 text-dark">
                  <label className="fw-bold mb-2" htmlFor="title">
                    Set Conditions
                  </label>
                  <p>
                    Matching &nbsp;{" "}
                    <button
                      className="px-3"
                      style={{
                        border: "1.5px solid #722ED1",
                        borderRadius: "5px 0px 0px 5px",
                        color: "#722ED1",
                      }}
                    >
                      Any
                    </button>
                    <button
                      className="px-3"
                      style={{
                        border: "1.5px solid #9e9e9ecb",
                        borderLeft: "none",
                        borderRadius: "0px 5px 5px 0px",
                      }}
                    >
                      All
                    </button>{" "}
                    &nbsp; of the following conditions.
                  </p>
                </div>
                <div
                  style={{ backgroundColor: "#f9f9f9" }}
                  className="d-flex justify-content-between align-items-center px-3 pt-3 pb-1"
                >
                  <span>
                    <FaMinusCircle className="text-danger" />{" "}
                  </span>{" "}
                  &nbsp;
                  <input
                    // ref={userRef}
                    type="text"
                    placeholder="Total Sales"
                    // name="title"
                    // value={firstname || ""}
                    className="form-control"
                    autoComplete="off"
                    // onChange={handleChange}
                  />
                  &nbsp;
                  <select className="form-select">
                    <option selected>Greater than</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  &nbsp;
                  <select className="form-select">
                    <option selected>USD $</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  &nbsp;
                  <input
                    type="text"
                    placeholder="100000"
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
