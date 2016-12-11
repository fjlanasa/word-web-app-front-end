function definitions(state=[], action) {
  switch(action.type){
    case 'SAVE':
      return [...state, {
        word: action.word,
        definition: action.definition
      }];
    default: return state;
  }
}

export default definitions;
