import React, { useState } from "react";
import "./Phone.scss";

const Phone = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="phone">
      <label htmlFor="phone">Phone number:</label>
      <div className="phoneInput">
        <select name="country" id="country">
          <option value="+91" selected>+91</option>
          <option value="name"></option>
        </select>
        <input type="text" placeholder="Enter your phone number"/>
      </div>
    </div>
  );
};

export default Phone;
