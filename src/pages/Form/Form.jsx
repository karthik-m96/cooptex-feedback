import React from "react";
import "./Form.scss";
import Phone from "../../components/Phone/Phone";

const Form = () => {
  return (
    <div className="form">
      <form className="container">
        <h3>
          We are committed to providing you with the best shopping experience
          possible, so we welcome your feedback!
        </h3>
        <div className="nameEmail">
          <div className="name">
            <label htmlFor="cusName">Customer Name:</label>
            <br />
            <input
              type="text"
              name="cusName"
              id="cusName"
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email Address:</label>
            <br />
            <input type="text" name="email" id="email" />
          </div>
        </div>
        <Phone />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
