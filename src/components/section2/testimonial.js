import React from "react";
import Testimonialone from "../../img/thirdtestimg.png";
import Testimonial2 from "../../img/secondtestimg.png";
import Testimonial3 from "../../img/firsttestimg.png";
import MindTickle from "../../img/mindtickle.png";
import intercom from "../../img/intercom.png";
import locus from "../../img/locus.png";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{ backgroundColor: "#E3FAF8", padding: "70px" }}
    >
      <header className="section-header text-center">
        <h2 style={{ color: "#00D4C7", fontSize: "13px" }}>Testimonials</h2>
        <p style={{ fontSize: "38px" }}>
          {" "}
          <strong>What they are saying about us</strong>{" "}
        </p>
      </header>
      <div
        id="testimonial-carousel"
        className="carouselwidth carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3800"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="card p-4 pb-3 d-flex justify-content-center"
              style={{ borderRadius: "20px" }}
            >
              <div className="card-body">
                <p
                  style={{ borderBottom: "0.7px solid #e4e2e2d2" }}
                  className="card-text pb-5"
                >
                  “Our biggest challenges were to build out automated AR
                  reporting, track communication with customers regarding past
                  due accounts, and personalizing our notification process.
                  Growfin allows us to have automated reports, real-time
                  communication updates to prevent duplicate work, and
                  personalized notifications to our customers.”
                </p>
                <div className="row d-flex align-items-center">
                  <img
                    src={Testimonial3}
                    style={{ width: "100px", height: "80px" }}
                    alt="Testimonial one"
                  />
                  <div className="col-md-5 mt-3">
                    <h5>Ashlie Stewart</h5>
                    <p>Manager, Billing Operations</p>
                  </div>
                  <div className="col-md-5 d-flex justify-content-end">
                    <img
                      src={intercom}
                      style={{ width: "100px", height: "30px" }}
                      alt="Testimonial two"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card p-4 pb-3" style={{ borderRadius: "20px" }}>
              <div className="card-body">
                <p
                  style={{ borderBottom: "0.7px solid #e4e2e2d2" }}
                  className="card-text pb-5"
                >
                  “Businesses whose accounts receivable are owed by a highly
                  diversified customer base may be less vulnerable than those
                  whose accounts receivable are owed by customers concentrated
                  within a particular sector. The accounts receivable-to-sales
                  ratio helps investors analyze the degree to which a business's
                  sales have not yet been paid for.”
                </p>
                <div className="row d-flex align-items-center">
                  <img
                    src={Testimonialone}
                    style={{ width: "100px", height: "80px" }}
                    alt="Testimonial three"
                  />
                  <div className="col-md-5 mt-3">
                    <h5>John Stewart</h5>
                    <p>Manager, AR Ops</p>
                  </div>
                  <div className="col-md-5 d-flex justify-content-end">
                    <img
                      src={MindTickle}
                      style={{ width: "100px", height: "30px" }}
                      alt="Testimonial image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card p-4 pb-3" style={{ borderRadius: "20px" }}>
              <div className="card-body">
                <p
                  style={{ borderBottom: "0.7px solid #e4e2e2d2" }}
                  className="card-text pb-5"
                >
                  “At the same time, dramatic declines in the allowance for bad
                  debts may indicate that the business’s management has had to
                  write off portions of their accounts receivable altogether.
                  Although this analysis can yield valuable insights, it can
                  also be time-consuming, as the process of estimating
                  creditworthiness can become highly complex.”
                </p>
                <div className="row d-flex align-items-center">
                  <img
                    src={Testimonial2}
                    style={{ width: "100px", height: "80px" }}
                    alt="Testimonial image"
                  />
                  <div className="col-md-5 mt-3">
                    <h5>Glen Philips</h5>
                    <p>AR Executive</p>
                  </div>
                  <div className="col-md-5 d-flex justify-content-end">
                    <img
                      src={locus}
                      style={{ width: "100px", height: "30px" }}
                      alt="Testimonial image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center pt-3">
        <button
          type="button"
          data-bs-target="#testimonial-carousel"
          data-bs-slide="prev"
          style={{ background: "none", border: "none" }}
        >
          <FaChevronCircleLeft
            style={{ fontSize: "34px", color: "#000", padding: "4px" }}
          />
        </button>
        <button
          type="button"
          data-bs-target="#testimonial-carousel"
          data-bs-slide="next"
          style={{ background: "none", border: "none" }}
        >
          <FaChevronCircleRight
            style={{ fontSize: "34px", color: "#000", padding: "4px" }}
          />
        </button>
      </div>
    </section>
  );
}
