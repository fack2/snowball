import React, { Component } from "react";
import "./index.css";
import BackButton from "../BackButton";
import Footer from "../Footer";
import axios from "axios";

export class ConfirmPage extends Component {
  confirmUserPledge = () => {
    const {pathname } = this.props.location;
    let Ids = pathname.split('/');
    const userId =Ids[1],pledgeId=Ids[2]
    axios
      .post(`/api/${userId}/${pledgeId}/addPledge`)
      .then(response => {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };
  render() {
    return (
      <div className="confirm__Page">
        <BackButton />

        <p className="confirm__Page-letsConfirm">LET’ S CONFIRM YOUR PLEDGE</p>
        <p className="confirm__Page-confirmPledge">
          I commit to taking no more than one return flight each year.When I do
          fly, I will offset my emissions.
        </p>
        <button
          className="confirm__Page-confirmButton"
          onClick={() => {
            this.confirmUserPledge();
          }}
        >
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
