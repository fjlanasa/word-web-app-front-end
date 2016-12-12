import React, { Component } from 'react';
import SavedDefinitionCollection from './SavedDefinitionCollection'

class SavedPage extends Component {
  render () {
    return (
      <div className="content">
        <div className="saved-heading">
          Saved Words
          <hr style={{border: '1px solid black'}}/>
        </div>
        <SavedDefinitionCollection {...this.props} />
      </div>
    );
  };
}

export default SavedPage;
