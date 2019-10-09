import React, { Component } from "react";
import axios from "axios";

class CategoryPledge extends Component {
  state = {};

  componentDidMount = () => {
    // const { history } = this.props
    // const categoryId =
    axios.get(`/api/pledges-categories/1`).then(({ data }) => {
      console.log("this is data from controller", data);
    })
      .catch(err => { console.log(err) })
  }
  render() {
    return <p>hey</p>;
  }
}
export default CategoryPledge;
