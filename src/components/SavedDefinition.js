import React, {Component} from 'react';

class SavedDefinition extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className="result">
        <div className="word"><div>{this.props.word}</div></div>
        <div className="result-content">
          <span className="type">({this.props.definition.type}) -</span>
          {this.props.definition.defenition}
        </div>
      </div>
    );
  }
};

export default SavedDefinition;
