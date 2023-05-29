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
            <input type="text" name="cusName" id="cusName" />
          </div>
          <div className="email">
            <label htmlFor="email">Email Address:</label>
            <br />
            <input type="text" name="email" id="email" />
          </div>
        </div>
        <Phone />
        <div className="questions">
          <div className="qos">
            <label htmlfor="qos">
              Please rate the quality of service you received from the Cooptex:
            </label>
            <br />
            <input type="radio" id="qos-excellent" name="qos" value="excellent" />
            <label htmlFor="qos-excellent">Excellent</label>
            <input type="radio" id="qos-good" name="qos" value="good" />
            <label htmlFor="qos-good">Good</label>
            <input type="radio" id="qos-fair" name="qos" value="fair" />
            <label htmlFor="qos-fair">Fair</label>
            <input type="radio" id="qos-bad" name="qos" value="bad" />
            <label htmlFor="qos-bad">Bad</label>
          </div>
          <div className="pos">
            <label htmlFor="pos">Please rate the quality of our product:</label>
            <br />
            <input type="radio" id="pos-excellent" name="pos" value="excellent" />
            <label htmlFor="pos-excellent">Excellent</label>
            <input type="radio" id="pos-good" name="pos" value="good" />
            <label htmlFor="pos-good">Good</label>
            <input type="radio" id="pos-fair" name="pos" value="fair" />
            <label htmlFor="pos-fair">Fair</label>
            <input type="radio" id="pos-bad" name="pos" value="bad" />
            <label htmlFor="pos-bad">Bad</label>
          </div>
          <div className="clean">
            <label for="clean">Was our premises clean?</label>
            <br />
            <input type="radio" id="cl-excellent" name="clean" value="excellent" />
            <label htmlFor="cl-excellent">Excellent</label>
            <input type="radio" id="cl-good" name="clean" value="good" />
            <label htmlFor="cl-good">Good</label>
            <input type="radio" id="cl-fair" name="clean" value="fair" />
            <label htmlFor="cl-fair">Fair</label>
            <input type="radio" id="cl-bad" name="clean" value="bad" />
            <label htmlFor="cl-bad">Bad</label>
          </div>
          <div className="shopExp">
            <label for="os">
              Please rate your overall shopping experience?
            </label>
            <br />
            <input type="radio" id="exp-excellent" name="exp" value="excellent" />
            <label htmlFor="exp-excellent">Excellent</label>
            <input type="radio" id="exp-good" name="exp" value="good" />
            <label htmlFor="exp-good">Good</label>
            <input type="radio" id="exp-fair" name="exp" value="fair" />
            <label htmlFor="exp-fair">Fair</label>
            <input type="radio" id="exp-bad" name="exp" value="bad" />
            <label htmlFor="exp-bad">Bad</label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
