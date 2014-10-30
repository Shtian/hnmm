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
        <a className="navbar-brand" href="javascript:void(0)">Brand</a>
      </div>
    );
  }
});

var NavbarContentWrapper = React.createClass({
  render() {
   return (
       <ul className="nav navbar-nav">
         <li className="active"><a href="javascript:void(0)">Active</a></li>
         <li><a href="javascript:void(0)">Link</a></li>
       </ul>
   );
  }
});

module.exports = Navbar;
