function searchTerm(state = '', action) {
  switch(action.type) {
    case 'SEARCH' :
        return action.word
        break;
    default:
      return state;
  }
}

export default searchTerm;
