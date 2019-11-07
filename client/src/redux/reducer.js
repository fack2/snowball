const initialState = {
  pledgeInfo: [],
  loading: true,
}

const reducer = (state = initialState, action) => {


  switch (action.type) {
    case 'GET_CATEGORY_PLEDGES':
      return {
        ...state,
        pledge_info: action.pledge_info,
        loading: false,
      }
    case 'LOADING':
      return {
        ...state,
        loading: true
      }
    default: return state
  }
}
export default reducer