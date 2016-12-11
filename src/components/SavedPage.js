import React, { Component } from 'react';
import SavedDefinitionCollection from './SavedDefinitionCollection'

class SavedPage extends Component {
  render () {
    return (
      <div>
        <SavedDefinitionCollection {...this.props} />
      </div>
    );
  };
}

export default SavedPage;
