const adderReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state + 1;
    default:
      return 0;
  }
}

export default adderReducer;