import React from "react";
import "./Form.scss"
import Phone from "../../components/Phone/Phone";

const Form = () => {
  return (
    <div className="form">
      <form className="container">
        
        <Phone />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
