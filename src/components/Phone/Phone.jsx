import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Phone = () => {
  
  const [phone, setPhone] = useState("");

  return (
    <div>
      <label htmlFor="phone">Phone number:</label>
      <PhoneInput
        id="phone"
        name="phone"
        country="in"
        value={phone}
        onChange={setPhone}
        preferredCountries={["in", "us"]}
        required
      />
    </div>
  );
};

export default Phone;
