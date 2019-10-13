import React from "react"

class PledgePage extends React.Component {
  render() {
    const { data } = this.props.location.state
    return (<div>
      <h1>helllo</h1>
      {console.log("this.props.location.data", data)}
    </div>)
  }
}
export default PledgePage