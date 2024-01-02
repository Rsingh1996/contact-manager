import React, { Fragment } from "react";
import "../App.css";
export const ContactList = ({ contact }) => {
  console.log("from contactList", contact);
  return (
    <div className="contact-list">
      {/* <h2>ContactList</h2> */}
      {contact.map((val) => {
        return (
          <div className="contact">
            <div>{val.name}</div>
            <div>{val.email}</div>
          </div>
        );
      })}
    </div>
  );
};
