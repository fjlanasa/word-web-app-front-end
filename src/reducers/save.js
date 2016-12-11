function definitions(state=[], action) {
  switch(action.type){
    case 'SAVE':
      let definition = {word: action.word,
                        definition: action.definition};
      let newState = [...state, definition]
      let jsonNewState = JSON.stringify(newState);
      localStorage.setItem('definitions', jsonNewState);
      return newState;
    default: return state;
  }
}

export default definitions;
