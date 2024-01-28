import React, { useState } from "react";
import "../App.css";

export const AddContact = ({ addContact }) => {
  const [contactData, setContactData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setContactData({ ...contactData, name: e.target.value });
    } else {
      setContactData({ ...contactData, email: e.target.value });
    }
  };
  const handleAdd = () => {
    // Email format validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (contactData.name.trim() === "" || contactData.email.trim() === "") {
      alert("Please fill in all the details");
    } else if (!emailRegex.test(contactData.email.trim())) {
      alert("Please enter a valid email address");
    } else {
      addContact(contactData);
      setContactData({ name: "", email: "" });
    }
  };

  return (
    <div className="contact-wrapper">
      <form>
        <input
          type="text"
          required
          placeholder="Enter name"
          name="name"
          value={contactData.name}
          onChange={handleChange}
        />
        <br />

        <input
          type="email"
          required
          placeholder="Enter email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
        />
      </form>
      <button className="btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};
