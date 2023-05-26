import React from "react";
import Phone from "../components/Phone";
import Navbar from "../components/Navbar/Navbar";

const Form = () => {
  return (
    <div className="container">
      <Navbar />
      <form className="form">
        <Phone />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
