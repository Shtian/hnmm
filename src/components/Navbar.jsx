'use strict';

var React = require('react');
var Link = require('./Link.jsx');

var Navbar = React.createClass({
  render() {
    return (
      <div className="navbar navbar-default" role="navigation">
        <NavbarHeader />
        <NavbarContentWrapper />
      </div>
    );
  }
});

var NavbarHeader = React.createClass({
  render() {
    return (
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand withripple" href="javascript:void(0)">HNMM<div className="ripple-wrapper"></div></a>
      </div>
    );
  }
});

var NavbarContentWrapper = React.createClass({
  render() {
   return (
     <div className="navbar-collapse collapse navbar-responsive-collapse">
     <ul className="nav navbar-nav">
       <li className="active"><a href="javascript:void(0)" className=" withripple">Active<div className="ripple-wrapper"></div></a></li>
       <li><a href="javascript:void(0)" className=" withripple">Link<div className="ripple-wrapper"></div></a></li>
     </ul>
     </div>
   );
  }
});

module.exports = Navbar;
