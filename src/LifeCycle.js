import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: " LifeCycleExample! Check concole for logs." };
  }

  UNSAFE_componentWillMount() {
    console.log("LifeCycleExample: componentWillMount()");
  }

  componentDidMount() {
    console.log("LifeCycleExample: componentDidMount()");
  }

  UNSAFE_componentWillReceiveProps(newProps) {
      console.log('LifeCycleExample: Component WILL RECIEVE PROPS!')
  }

  changeState() {
    this.setState({ hello: " ComponentLifeCycle Changing State!" });
  }

  render() {
    return (
      <div>
        <h1>Hello{this.state.hello}</h1>
        <h2>
          <button onClick={this.changeState.bind(this)}>Press Here!</button>
        </h2>
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifeCycleExample: shouldComponentUpdate()");
    return true;
  }

  UNSAFE_componentWillUpdate() {
    console.log("LifeCycleExample: componentWillUpdate()");
  }

  componentDidUpdate() {
    console.log("LifeCycleExample: componentDidUpdate()");
  }
}

export default LifeCycle;
