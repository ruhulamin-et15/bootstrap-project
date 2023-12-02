import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div
        className="container d-flex justify-content-center align-items-center"
        id="subscribe"
      >
        <div>
          <h2>LET'S STAY IN TOUCH</h2>
          <h6>Get updates on sales special and more</h6>
          <input
            className="form-control"
            type="mail"
            placeholder="Enter Your Mail"
          />
          <button className="submit-btn mt-3">Submit</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
