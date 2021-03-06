import React, {Component} from 'react';
import { browserHistory } from 'react-router';

class SearchResult extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.save(this.props.searchTerm, this.props.result);
    browserHistory.push('/saved');
  }
  render() {
    return(
      <div className='result'>
        <div className='result-content'>
          <span className='type'>{this.props.result.type}</span> - {this.props.result.defenition}
        </div>
        <button className='save' onClick={this.handleClick}>Save</button>
      </div>
    );
  }
};

export default SearchResult;
