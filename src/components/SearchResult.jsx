import React, {Component} from 'react';
import { browserHistory } from 'react-router';

// for just one handle cb I usually just inline with arrow funcs to save the
// constructor
class SearchResult extends Component {
  handleClick = () => {
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
