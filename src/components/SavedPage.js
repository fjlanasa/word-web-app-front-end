import React, { Component } from 'react';
import SavedDefinitionCollection from './SavedDefinitionCollection'

function SavedPage(props) {
  return (
    <div className="content">
      <div className="saved-heading">
        Saved Words
        <hr style={{border: '1px solid black'}}/>
      </div>
      <SavedDefinitionCollection {...props} />
    </div>
  );
}

export default SavedPage;
