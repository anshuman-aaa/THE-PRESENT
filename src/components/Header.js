'use strict';

import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">

          <a className="navbar-brand bg-primary">
            {this.props.appName}
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;