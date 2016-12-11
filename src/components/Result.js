import React, {Component} from 'react';

class Result extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let stored = localStorage.getItem('definitions') || [];
    console.log(localStorage.getItem('definitions'));
    console.log(stored.length);
  }
  render() {
    return(
      <li className="result">
      <div onClick={this.handleClick}>{this.props.result.example}</div>
      </li>
    );
  }
};

export default Result;
