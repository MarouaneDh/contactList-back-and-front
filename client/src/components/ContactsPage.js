import React from "react";
import ContactList from "./ContactList";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleFalse } from "../JS/Actions/edit";

const ContactsPage = () => {
  const dispatch = useDispatch();
  return (
    <div className="page">
      <div className="contacts">
        <ContactList />
      </div>
      <div className="main">
        <Link to={{ pathname: "/AddContact" }}>
          <button className="principal" onClick={() => dispatch(toggleFalse())}>
            Add a new contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactsPage;
