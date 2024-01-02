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
    if (contactData.name === "" || contactData.email === "") {
      alert("Please fill all the details");
    } else {
      addContact(contactData);
      setContactData({ name: "", email: "" });
    }
  };

  return (
    <div className="contact-wrapper">
      {/* <h2>Add Contact</h2> */}
      <form>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={contactData.name}
          onChange={handleChange}
        />
        <br />

        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
        />
        <br />
      </form>
      <button className="btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};
