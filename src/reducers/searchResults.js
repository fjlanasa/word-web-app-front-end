function searchResults(state = [], action) {
  switch(action.type) {
    case 'SEARCH' :
        return action.body;
    default:
      return state;
  }
}

export default searchResults;
