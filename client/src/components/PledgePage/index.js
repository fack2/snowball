import React from "react"
import axios from 'axios'
class PledgePage extends React.Component {
  state = {
    pledgeInfo: [],
    pledgeInstructions: [],
    pledgeProsCons: [],
    pledgeResources: [],
    pledgeReferences: []
  }

  componentDidMount() {
    const { pledge_id } = this.props.location.state


    axios.get(`/api/action-category/pledge/${pledge_id}`).then(Response => {
      const pledgeInfoPage = Response.data
      this.setState({
        pledgeInfo: pledgeInfoPage[0],
        pledgeInstructions: pledgeInfoPage[1],
        pledgeProsCons: pledgeInfoPage[2],
        pledgeResources: pledgeInfoPage[3],
        pledgeReferences: pledgeInfoPage[4]
      })

    }).catch(err => { console.log("0000", err) });

  }

  render() {
    const { data } = this.props.location.state
    const { pledgeInfo, pledgeInstructions, pledgeProsCons, pledgeResources, pledgeReferences } = this.state

    return (
      <>
        {
          !pledgeInfo.length ? <p>Loading...</p> :
            <>
              <p>{pledgeInfo[0].title}</p>
              <p>{pledgeInfo[0].description}</p>
              <p>{pledgeInfo[0].importance}</p>
              <p>{pledgeInfo[0].img}</p>
              <p>{pledgeInfo[0].number_of_enrollement}</p>
              <p>{pledgeInfo[0].further_info}</p>
              {pledgeInstructions.map((element, index) => {
                return (
                  <>
                    <p>{element.description}</p>
                  </>
                )
              })}
              {pledgeProsCons.map((element, index) => {
                return (
                  <>
                    <p>{element.statement}</p>
                    <p>{element.color}</p>

                  </>
                )
              })}

              {pledgeResources.map((element, index) => {
                return (
                  <>
                    <p>{element.description}</p>

                  </>
                )
              })}


              {pledgeReferences.map((element, index) => {
                return (
                  <>
                    <p>{element.description}</p>
                  </>
                )
              })}
            </>


        }

      </>
    )
  }
}
export default PledgePage