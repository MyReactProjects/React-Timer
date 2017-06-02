var React = require('react');
var { Link, IndexLink } = require('react-router');

var Nav = (props) => {
  return (
    <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer App
            </li>
            <li>
              <IndexLink to="/timer" activeClassName="active-Link">Timer</IndexLink>
            </li>
            <li>
              <IndexLink to="/countdown" activeClassName="active-Link">Countdown</IndexLink>
            </li>
          </ul>
        </div>

        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">Created by <a href="http://www.jude2go.com" target="_blank">Jude2Go©</a></li>
          </ul>
        </div>
    </div>
  );
}

module.exports = Nav;
