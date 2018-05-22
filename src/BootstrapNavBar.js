import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class BootstrapNavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">WebSiteName</a>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/weather"> Weather </Link></li>
            <li><Link to="/mayor">Mayor</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default BootstrapNavBar