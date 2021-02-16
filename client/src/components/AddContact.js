import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editContact, postContact } from "../JS/Actions/contacts";
import { toggleFalse } from "../JS/Actions/edit";

const Add = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    birthday: "",
  });
  const userReducer = useSelector((state) => state.contactReducer.user);
  const edit = useSelector((state) => state.editReducer.edit);
  const dispatch = useDispatch();
  useEffect(() => {
    edit
      ? setUser(userReducer)
      : setUser({ name: "", age: "", email: "", phone: "", birthday: "" });
  }, [edit, userReducer]);
  const handleContact = () => {
    if (!edit) {
      dispatch(postContact(user));
      alert(`the contact ${user.name} was successfully added`);
    } else {
      dispatch(editContact(userReducer._id, user));
      dispatch(toggleFalse());
      alert(`the contact ${user.name} was successfully edited`);
    }
  };
  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Adding Contact
              </h5>
            </div>
            <div className="modal-body">
              <label>Name : </label>
              <input
                name="name"
                value={user.name}
                type="text"
                placeholder="type the name here"
                onChange={handleChange}
              ></input>
              <label>Birthday : </label>
              <input
                name="birthday"
                value={user.birthday}
                placeholder="type the birthday here"
                onChange={handleChange}
              ></input>
              <label>Age : </label>
              <input
                name="age"
                value={user.age}
                placeholder="type the age here"
                onChange={handleChange}
              ></input>
              <label>Email : </label>
              <input
                name="email"
                value={user.email}
                type="email"
                placeholder="type the email here"
                onChange={handleChange}
              ></input>
              <label>Phone number : </label>
              <input
                name="phone"
                value={user.phone}
                type="number"
                placeholder="type the phone number here"
                onChange={handleChange}
              ></input>
            </div>
            <div className="modal-footer">
              <Link to="/ContactsPage">
                <button onClick={handleContact}>
                  {edit ? "edit" : "Save"}
                </button>
              </Link>
            </div>
          </div>
        </div>
        <Link to={{ pathname: "/ContactsPage" }}>
          <button>Back to contact List</button>
        </Link>
      </div>
    </div>
  );
};

export default Add;
