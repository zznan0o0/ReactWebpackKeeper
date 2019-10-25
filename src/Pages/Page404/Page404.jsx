import React, {Component} from 'react';

import { Link  } from 'react-keeper';
import style from './Page404.css';
export default class Page404 extends Component {
  state = {count:0}

  click = () => {
    this.setState({count: (this.state.count + 1)})
  }

  render(){
    return (
      <div className={style.red}>
        <Link to="/">返回</Link>
        <button onClick={this.click}>404</button>
        <div>{this.state.count}</div>
      </div>
    );
  }
}