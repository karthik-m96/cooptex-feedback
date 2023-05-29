import React from "react";
import "./Form.scss";
import Phone from "../../components/Phone/Phone";

const Form = () => {
  return (
    <div className="form">
      <div className="left">
        <div className="heading">
          <div>Feel Free To Drop</div>
          <div>Us your <span>Feedback.</span></div>
        </div>
      </div>
      <div className="right">
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
                required
                placeholder="Enter the name"
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email Address:</label>
              <br />
              <input
                type="text"
                name="email"
                id="email"
                required
                placeholder="Enter the email address"
              />
            </div>
          </div>
          <Phone />
          <div className="questions" aria-required>
            <div className="qos">
              <label htmlfor="qos">
                Please rate the quality of service you received from the
                Cooptex:
              </label>
              <br />
              <input
                type="checkbox"
                id="qos-excellent"
                name="qos"
                value="excellent"
              />
              <label htmlFor="qos-excellent">Excellent</label>
              <input type="checkbox" id="qos-good" name="qos" value="good" />
              <label htmlFor="qos-good">Good</label>
              <input type="checkbox" id="qos-fair" name="qos" value="fair" />
              <label htmlFor="qos-fair">Fair</label>
              <input type="checkbox" id="qos-bad" name="qos" value="bad" />
              <label htmlFor="qos-bad">Bad</label>
            </div>
            <div className="pos">
              <label htmlFor="pos">
                Please rate the quality of our product:
              </label>
              <br />
              <input
                type="checkbox"
                id="pos-excellent"
                name="pos"
                value="excellent"
              />
              <label htmlFor="pos-excellent">Excellent</label>
              <input type="checkbox" id="pos-good" name="pos" value="good" />
              <label htmlFor="pos-good">Good</label>
              <input type="checkbox" id="pos-fair" name="pos" value="fair" />
              <label htmlFor="pos-fair">Fair</label>
              <input type="checkbox" id="pos-bad" name="pos" value="bad" />
              <label htmlFor="pos-bad">Bad</label>
            </div>
            <div className="clean">
              <label for="clean">Was our premises clean?</label>
              <br />
              <input
                type="checkbox"
                id="cl-excellent"
                name="clean"
                value="excellent"
              />
              <label htmlFor="cl-excellent">Excellent</label>
              <input type="checkbox" id="cl-good" name="clean" value="good" />
              <label htmlFor="cl-good">Good</label>
              <input type="checkbox" id="cl-fair" name="clean" value="fair" />
              <label htmlFor="cl-fair">Fair</label>
              <input type="checkbox" id="cl-bad" name="clean" value="bad" />
              <label htmlFor="cl-bad">Bad</label>
            </div>
            <div className="exp">
              <label htmlFor="exp-excellent">
                Please rate your overall shopping experience?
              </label>
              <br />
              <input
                type="checkbox"
                id="exp-excellent"
                name="exp"
                value="excellent"
              />
              <label htmlFor="exp-excellent">Excellent</label>
              <input type="checkbox" id="exp-good" name="exp" value="good" />
              <label htmlFor="exp-good">Good</label>
              <input type="checkbox" id="exp-fair" name="exp" value="fair" />
              <label htmlFor="exp-fair">Fair</label>
              <input type="checkbox" id="exp-bad" name="exp" value="bad" />
              <label htmlFor="exp-bad">Bad</label>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
