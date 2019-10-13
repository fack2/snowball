import React from 'react'
import './style.css'
const PledgeItem = props => {
  const { element, history } = props
  return (
    <div className="pledge-div">
      <img onClick={() => { history.push(`/dashboard/action-category/pledge/${element.title}`, { data: element }) }} alt={element.title} className="pledge-div__img" src={element.img} />
      <p className="pledge-div__title">{element.title}</p>
      <p className="pledge-div__description">{element.description}</p>
      <span className="pledge-div__already">PLEDGES ALREADY </span>
      <span className="pledge-div__number">{element.number_of_enrollement}</span>
    </div>
  )
}
export default PledgeItem