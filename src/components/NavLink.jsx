import React from 'react';
import { Link } from 'react-router';

// Don't need to call constructor if it's not being used.
// Can take advantage of react routers link's activeClassName.
// Avoid interacting with context if possible. 

const NavLink = ({children, ...rest}) => (
  <Link {...rest} className="saved-link" activeClassName="active">
    {children}
  </Link>
)

export default NavLink;
