import axios from 'axios'

export const getCategoryPledges = (category_id) => async (dispatch, getState) => {

  dispatch({
    type: 'LOADING',
  })

  const response = await axios.get(`/api/action-category/${category_id}`)
  const pledge_info = response.data
  dispatch({
    type: 'GET_CATEGORY_PLEDGES',
    pledge_info
  })
}
