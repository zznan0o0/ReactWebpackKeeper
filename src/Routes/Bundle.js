import React, { Component } from 'react'

class Bundle extends Component {
  state = {
    // short for "module" but that's a keyword in js, so "mod"
    mod: null
  };

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props) {
    this.setState({
      mod: null
    });
    props.load((mod) => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render() {
    return this.props.children(this.state.mod)
  }
}


const Loading = function () {
  return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component {...props} /> : <Loading />
    }
  </Bundle>
);
Bundle.createComponent = createComponent;

export default Bundle;
export {
  Bundle,
  createComponent,
}