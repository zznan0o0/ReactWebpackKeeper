import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { HashRouter } from 'react-keeper';

import Navbar from 'Components/Navbar/Navbar.jsx';
import Routes from 'Routes/Routes.jsx';
import Store from 'Redux/Store.js'





export default class App extends Component{
  render(){
    return (
      <Provider store={Store}>
        <HashRouter>
          <div>
            {/* <Navbar/> */}
            {Routes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}