import React, { useState } from "react";
import "../App.css";

export const AddContact = () => {
  const [contactData, setContactData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setContactData({ ...contactData, name: e.target.value });
    } else {
      setContactData({ ...contactData, email: e.target.value });
    }
  };
  console.log(contactData);
  return (
    <div className="contact-wrapper">
      <h2>Add Contact</h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={contactData.name}
          onChange={handleChange}
        />
        <br />
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
        />
        <br />
      </form>
      <button className="btn">Add Contact </button>
    </div>
  );
};
