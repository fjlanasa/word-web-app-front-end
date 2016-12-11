import React, {Component} from 'react';

class SavedDefinition extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <li className="result">
      <div>{this.props.word} ({this.props.definition.type}): {this.props.definition.defenition}</div>
      </li>
    );
  }
};

export default SavedDefinition;
