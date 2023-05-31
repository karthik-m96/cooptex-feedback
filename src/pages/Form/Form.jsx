import React from "react";
import "./Form.scss";

const Form = () => {

  return (
    <div className="form">
      <div className="left">
        <div className="heading">
          <div>Feel Free To Drop</div>
          <div>
            Us your <span className="feedText">Feedback.</span>
          </div>
        </div>
        <p className="para">
          We are commited to providing you with the best shopping experience
          possible, so we welcome your comments.
        </p>
        <div className="img">
          <img src="/img/cooptex cropped.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <form className="container" action="POST" data-netlify="true">
          <h3>
            We are committed to providing you with the best shopping experience
            possible, so we welcome your feedback!
          </h3>
          <div className="nameEmailPhone">
            <div className="nameEmail">
              <div className="name">
                <label htmlFor="cusName">
                  Customer Name: <span className="asterisk">*</span>
                </label>
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
                <label htmlFor="email">
                  Email Address:<span className="asterisk">*</span>
                </label>
                <br />
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter the email address"
                />
              </div>
            </div>
            <div className="phone">
              <label htmlFor="phone" className="phoneLabel">
                Phone Number:<span className="asterisk">*</span>
              </label>
              <br />
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                pattern="[0-9]{10}"
                placeholder="Enter your Phone number"
              />
            </div>
          </div>

          <div className="questions">
            <div className="qos">
              <label htmlfor="qos">
                Please rate the quality of service you received from the
                Cooptex?<span className="asterisk">*</span>
              </label>
              <br />
              <div className="check">
                <input
                  type="radio"
                  id="qos-excellent"
                  name="qos"
                  value="excellent"
                  required
                />
                <label htmlFor="qos-excellent">Excellent</label>
                <input
                  type="radio"
                  id="qos-good"
                  name="qos"
                  value="good"
                  required
                />
                <label htmlFor="qos-good">Good</label>
                <input
                  type="radio"
                  id="qos-fair"
                  name="qos"
                  value="fair"
                  required
                />
                <label htmlFor="qos-fair">Fair</label>
                <input
                  type="radio"
                  id="qos-bad"
                  name="qos"
                  value="bad"
                  required
                />
                <label htmlFor="qos-bad">Bad</label>
              </div>
            </div>
            <div className="pos">
              <label htmlFor="pos">
                Please rate the quality of our product?{" "}
                <span className="asterisk">*</span>
              </label>
              <br />
              <div className="check">
                <input
                  type="radio"
                  id="pos-excellent"
                  name="pos"
                  value="excellent"
                  required
                />
                <label htmlFor="pos-excellent">Excellent</label>
                <input
                  type="radio"
                  id="pos-good"
                  name="pos"
                  value="good"
                  required
                />
                <label htmlFor="pos-good">Good</label>
                <input
                  type="radio"
                  id="pos-fair"
                  name="pos"
                  value="fair"
                  required
                />
                <label htmlFor="pos-fair">Fair</label>
                <input
                  type="radio"
                  id="pos-bad"
                  name="pos"
                  value="bad"
                  required
                />
                <label htmlFor="pos-bad">Bad</label>
              </div>
            </div>
            <div className="clean">
              <label for="clean">
                Was our premises clean?<span className="asterisk">*</span>
              </label>
              <br />
              <div className="check">
                <input
                  type="radio"
                  id="cl-excellent"
                  name="clean"
                  value="excellent"
                  required
                />
                <label htmlFor="cl-excellent">Excellent</label>
                <input
                  type="radio"
                  id="cl-good"
                  name="clean"
                  value="good"
                  required
                />
                <label htmlFor="cl-good">Good</label>
                <input
                  type="radio"
                  id="cl-fair"
                  name="clean"
                  value="fair"
                  required
                />
                <label htmlFor="cl-fair">Fair</label>
                <input
                  type="radio"
                  id="cl-bad"
                  name="clean"
                  value="bad"
                  required
                />
                <label htmlFor="cl-bad">Bad</label>
              </div>
            </div>
            <div className="exp">
              <label htmlFor="exp-excellent">
                Please rate your overall shopping experience?
                <span className="asterisk">*</span>
              </label>
              <br />
              <div className="check">
                <input
                  type="radio"
                  id="exp-excellent"
                  name="exp"
                  value="excellent"
                  required
                />
                <label htmlFor="exp-excellent">Excellent</label>
                <input
                  type="radio"
                  id="exp-good"
                  name="exp"
                  value="good"
                  required
                />
                <label htmlFor="exp-good">Good</label>
                <input
                  type="radio"
                  id="exp-fair"
                  name="exp"
                  value="fair"
                  required
                />
                <label htmlFor="exp-fair">Fair</label>
                <input
                  type="radio"
                  id="exp-bad"
                  name="exp"
                  value="bad"
                  required
                />
                <label htmlFor="exp-bad">Bad</label>
              </div>
            </div>
          </div>
          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
