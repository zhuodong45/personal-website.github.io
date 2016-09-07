import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
    <div>
      <nav className="navbar navbar-default pageheader1">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to={"/intro"}><img id="logo" src="./build/img/logo2.png" className="logo-style navbar-left"/></Link>
          </div>

          <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav ulstyle zeroMargin">
              <Link to={"/aboutme"}><li className="btn1 btn-2" id="btn-me">Me</li></Link>
            </ul>
            <ul className="nav navbar-nav ulstyle zeroMargin">
              <Link to={"/school"}><li className="btn1 btn-2" id="btn-school">School</li></Link>
            </ul>
            <ul className="nav navbar-nav ulstyle zeroMargin">
              <Link to={"/events"}><li className="btn1 btn-2" id="btn-event">Event</li></Link>
            </ul>
            <ul className="nav navbar-nav ulstyle zeroMargin">
              <Link to={"/resume"}><li className="btn1 btn-2" id="btn-resume">Resume</li></Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    )
  }
}
