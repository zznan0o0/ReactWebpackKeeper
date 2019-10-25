import React, { Component } from 'react';
import { Link, CacheLink } from 'react-keeper';

export default class Navbar extends Component {
  render() {
    return (
      <ul>
        <li><Link to="/">首页1</Link></li>
        <li><CacheLink to="/404">404</CacheLink></li>
      </ul>
    );
  }
}