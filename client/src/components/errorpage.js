import React from "react";
import { Link } from "react-router-dom";
import img from "../../src/error.png";

const ErrorPage = () => {
  return (
    <div>
      <img src={img} alt="" />
      <br />
      <Link to={{ pathname: "/" }}>
        <button type="button" className="btn btn-primary">
          Back to home page
        </button>
      </Link>
      <br />
      <Link to={{ pathname: "/ContactsPage" }}>
        <button type="button" className="btn btn-primary">
          Back to contact List
        </button>
      </Link>
      <br />
    </div>
  );
};

export default ErrorPage;
