function searchTerm(state = '', action) {
  switch(action.type) {
    case 'SEARCH' :
        return action.word;
    default:
      return state;
  }
}

export default searchTerm;
