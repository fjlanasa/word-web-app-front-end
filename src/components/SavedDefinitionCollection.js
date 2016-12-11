import React from 'react';
import SavedDefinition from './SavedDefinition';

const SavedDefinitionCollection = props => {
  let definitions = props.definitions.map((definition, index)=>{
    return (
      <SavedDefinition key={index} index={index} word={definition.word} definition={definition.definition} {...props}/>
    )
  })
  return (
    <div className='small-12 columns'>
      <ul className="definitions">
        {definitions}
      </ul>
    </div>
  )
}

export default SavedDefinitionCollection;
