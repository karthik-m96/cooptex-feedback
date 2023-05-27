import React, { useState } from "react";


const Phone = () => {

  const [phone, setPhone] = useState("");

  return (
    <div>
      <label htmlFor="phone">Phone number:</label>
      <select name="" id="">
        <option value=""></option>
      </select>
    </div>
  );  
};

export default Phone;
