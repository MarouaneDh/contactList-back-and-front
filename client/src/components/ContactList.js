import React from "react";
import ContactCard from "./ContactCard";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getContacts } from "../JS/Actions/contacts";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactReducer.contactList);
  const loadContacts = useSelector(
    (state) => state.contactReducer.loadContacts
  );
  console.log(contacts, loadContacts);
  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <div className="contact-list">
      {loadContacts ? (
        <h2>loading</h2>
      ) : (
        contacts.map((el) => <ContactCard key={el._id} contact={el} />)
      )}
    </div>
  );
};

export default ContactList;
