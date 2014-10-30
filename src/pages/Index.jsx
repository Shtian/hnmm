'use strict';

var React = require('react');
var DefaultLayout = require('../layouts/DefaultLayout.jsx');

var HomePage = React.createClass({
  getDefaultProps() {
    return {
      title: 'React.js Starter Kit',
      layout: DefaultLayout
    };
  },
  render() {
    return (
      <div className="container">

        <a href="javascript:void(0)" className="btn btn-primary">Primary</a>
      </div>
    );
  }
});

module.exports = HomePage;
