import React from 'react'
const quotes = ["quote1", "quote2", "quote3", "quote4", "quote5"];

const NotFound = () => {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <h1>
      Quote: <strong>{randomQuote}</strong>
    </h1>
  );
};

class FunComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "foo" };
  }

  changeState() {
    this.setState({ username: "bar" });
  }

  render() {
    return (
      <div>
        Welcome: {this.state.username}
        <NotFound />

        <h2>
            <button onClick={this.changeState.bind(this)}>ChangeState of User!</button>
        </h2>
      </div>
    );
  }
}

export default FunComp;