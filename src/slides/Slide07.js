import React from 'react';

class Slide07 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 1 };
  }

  onIncrementClicked = () => {
    this.setState(state => ({
      count: state.count + 1
    }));
  }

  render () {
    return (
      <section>
        <h2>And even creating stateful components within your slides!</h2>
        <br />
        {this.state.count}
        <button onClick={this.onIncrementClicked}>Increment</button>
      </section>
    );
  }
};

export default Slide07;
