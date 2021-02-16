import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact, getContact } from "../JS/Actions/contacts";
import { toggleTrue } from "../JS/Actions/edit";

const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <div className="contact">
      <h2>Name : {contact.name}</h2>
      <h3>Phone number : {contact.phone}</h3>
      <h3>Birthday : {contact.birthday}</h3>
      <h3>Age : {contact.age}</h3>
      <h4>Email : {contact.email}</h4>
      <button
        onClick={() => {
          dispatch(deleteContact(contact._id));
          alert(`the contact ${contact.name} was deleted`);
        }}
      >
        DELETE
      </button>
      <Link to={{ pathname: `edit/${contact._id}` }}>
        <button
          onClick={() => {
            dispatch(getContact(contact._id));
            dispatch(toggleTrue());
          }}
        >
          EDIT
        </button>
      </Link>
    </div>
  );
};

export default ContactCard;
