import React, {useState} from "react";
import "./Phone.scss";
import countryCodes from "./phone-codes";


const Phone = () => {

  const [phone, setPhone] = useState("")

  const [code, setCode] = useState("")

 
  return (
    <div className="phone">
      <label htmlFor="phone">Phone number:</label>
      <div className="phoneInput">
        <select name="country" id="country" onChange={(e)=>setPhone(e.target.value)}>
          {countryCodes.map((item)=>(
            <option value={item.dial_code}>{item.name}</option>
          ))}

        </select>
        <input type="text" value={code} onChange={} placeholder="Enter your phone number" />
      </div>
    </div>
  );
};

export default Phone;
