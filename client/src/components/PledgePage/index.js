import React from "react"
import axios from 'axios'
class PledgePage extends React.Component {

  componentDidMount() {
    const { pledge_id } = this.props.location.state
    axios.get(`/api/action-category/pledge/${pledge_id}`).then(Response => {
      const pledge_info_page = Response.data

      console.log("Response", pledge_info_page);

      //here should handle what we recieve from database which should change to rexieve sth i can read 
    }).catch(err => { console.log("0000", err) });

  }

  render() {
    const { data } = this.props.location.state

    return (<div>
      {/* should axios request to get pledge info by id */}
      {/* {console.log("this.props.location.data", data)} */}
    </div>)
  }
}
export default PledgePage