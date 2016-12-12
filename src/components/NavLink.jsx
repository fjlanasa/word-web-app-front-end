import React, { Component } from 'react';
import { Link } from 'react-router';

class NavLink extends Component {
  constructor(props, context){
    super(props);
  }
  render() {
    let isActive = this.context.router.isActive(this.props.to, true);
    let className = isActive ? 'active saved-link': 'saved-link';

    return (
      <div className={className}>
        <Link {...this.props}>
          {this.props.children}
        </Link>
      </div>
    );
  };
}

NavLink.contextTypes = {
    router: React.PropTypes.object
};


export default NavLink;
