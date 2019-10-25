import React, { Component } from 'react';
import { increment, decrement, reset } from 'Actions/Counter.js';
import { connect } from 'react-redux';
import style from './Home.css';
import { CacheLink   } from 'react-keeper';

class Home extends Component {
  render() {
    return (
      <div>
        <CacheLink to="/404">404</CacheLink>
        <div className={style.red}>当前计数为{this.props.counter.count}</div>
        <button onClick={() => this.props.increment()}>自增
        </button>
        <button onClick={() => this.props.decrement()}>自减
        </button>
        <button onClick={() => this.props.reset()}>重置
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch(increment())
    },
    decrement: () => {
      dispatch(decrement())
    },
    reset: () => {
      dispatch(reset())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);