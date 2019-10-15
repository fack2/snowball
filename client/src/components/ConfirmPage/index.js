import React, { Component } from "react";
import "./index.css";
import BackButton from "../BackButton";
import Footer from "../Footer";

export class ConfirmPage extends Component {

  render() {
    return (
      <div className="confirm__Page">
        <BackButton />

        <p className="confirm__Page-letsConfirm">
          LET’ S CONFIRM YOUR PLEDGE
        </p>
        <p className="confirm__Page-confirmPledge">
          I commit to taking no more than one return flight each year.When I do
          fly, I will offset my emissions.
        </p>
        <button className="confirm__Page-confirmButton">
          Confirm the pledge
        </button>
        <p className="confirm__Page-unConfirm">
          * You can come back and deselect this pledge at any time if you don’ t
          feel able to carry it out.
        </p>

        <Footer />
      </div>
    );
  }
}

export default ConfirmPage;
