import React, {Component} from 'react';

class SavedDefinition extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="result">
        {this.props.word} ({this.props.definition.type}): {this.props.definition.defenition}
      </div>
    );
  }
};

export default SavedDefinition;
