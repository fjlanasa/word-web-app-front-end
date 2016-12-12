import React, { Component } from 'react';
import SavedDefinitionCollection from './SavedDefinitionCollection'

class SavedPage extends Component {
  render () {
    return (
      <div className="content">
        <SavedDefinitionCollection {...this.props} />
      </div>
    );
  };
}

export default SavedPage;
