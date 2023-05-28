<<<<<<< HEAD
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Phone = () => {
  
  const [phone, setPhone] = useState("");
=======
import React, {useState} from "react";
import "./Phone.scss";
import countryCodes from "./phone-codes";


const Phone = () => {
>>>>>>> e87a5a36ec9a85285732253ad1847851caad8833

  const [phone, setPhone] = useState("")

  const [code, setCode] = useState("")

 
  return (
    <div>
      <label htmlFor="phone">Phone number:</label>
<<<<<<< HEAD
      <PhoneInput
        id="phone"
        name="phone"
        country="in"
        value={phone}
        onChange={setPhone}
        preferredCountries={["in", "us"]}
        required
      />
=======
      <div className="phoneInput">
        <select name="country" id="country" onChange={(e)=>setPhone(e.target.value)}>
          {countryCodes.map((item)=>(
            <option value={item.dial_code}>{item.name}</option>
          ))}

        </select>
        <input type="text" value={code} onChange={} placeholder="Enter your phone number" />
      </div>
>>>>>>> e87a5a36ec9a85285732253ad1847851caad8833
    </div>
  );
};

export default Phone;
