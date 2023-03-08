import React, { useState } from "react";
import "./index.css";

function RegistrationForm() {
  const [CustomerAddress, setCustomerAddress] = useState("");
  const [CustomerName, setCustomerName] = useState("");
  const [GSTNumber, setGSTNumber] = useState("");
  const [SiteNumber, setSiteNumber] = useState("");
  const [Area, setArea] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    // Do something with the form data
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h1>Customer Data</h1>
      <div className="input-wrapper">
        <label htmlFor="CustomerAddress">Address</label>
        <input
          type="text"
          id="CustomerAddress"
          value={CustomerAddress}
          onChange={(event) => setCustomerAddress(event.target.value)}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="CustomerName">Name</label>
        <input
          type="text"
          id="CustomerName"
          value={CustomerName}
          onChange={(event) => setCustomerName(event.target.value)}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="GSTNumber">GST</label>
        <input
          type="text"
          id="GSTNumber"
          value={GSTNumber}
          onChange={(event) => setGSTNumber(event.target.value)}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="SiteNumber">Site</label>
        <input
          type="text"
          id="SiteNumber"
          value={SiteNumber}
          onChange={(event) => setSiteNumber(event.target.value)}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="Area">Area</label>
        <input
          type="text"
          id="Area"
          value={Area}
          onChange={(event) => setArea(event.target.value)}
          required
        />
      </div>
      <button type="submit">Done</button>
    </form>
  );
}

export default RegistrationForm;
