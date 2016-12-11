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
      <li className="result">
        <div onClick={this.handleClick}>
          {this.props.searchTerm} ({this.props.result.type}): {this.props.result.defenition}
        </div>
      </li>
    );
  }
};

export default SearchResult;
