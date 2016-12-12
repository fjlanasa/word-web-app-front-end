import React, {Component} from 'react';

class SearchResult extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    debugger;
    this.props.save(this.props.searchTerm, this.props.result)
  }
  render() {
    return(
      <div className="result">
        <div className="result-content">
          {this.props.searchTerm} ({this.props.result.type}): {this.props.result.defenition}
        </div>
        <button className="save" onClick={this.handleClick}>Save</button>
      </div>
    );
  }
};

export default SearchResult;
