function definitions(state=[], action) {
  switch(action.type){
    case 'SAVE':
      let definition = {word: action.word,
                        definition: action.definition};
      let newState = [definition, ...state]
      let jsonNewState = JSON.stringify(newState);
      // you actually wouldn't want to do this in the reducer.  Reducers should
      // not have side effects.  That is what action creators are for.
      localStorage.setItem('definitions', jsonNewState);
      return newState;
    default: return state;
  }
}

export default definitions;
