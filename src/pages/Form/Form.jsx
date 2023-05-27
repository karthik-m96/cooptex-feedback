import React from "react";
import Phone from "../../components/Phone/Phone";
import "./Form.scss"

const Form = () => {
  return (
    <div className="form">
      <form className="container">
        <label htmlFor=""></label>
        <input type="text" />
        <Phone />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
