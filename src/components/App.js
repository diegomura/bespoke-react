// ------------------------------------
// DO NOT EDIT OR DELETE THIS COMPONENT
// ------------------------------------

import React from 'react';
import bespoke from 'bespoke';

const req = require.context("../slides", true, /\.js$/);
const slides = req.keys().map(key => req(key));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { deck: null };
  }

  componentDidMount() {
    const { mountElement, plugins } = this.props;

    this.setState({ deck: bespoke.from(mountElement, plugins) })
  }

  render() {
    const { deck } = this.state;

    return (
      slides.map(slide => {
        const Slide = slide.default;

        return <Slide key={Slide.name} deck={deck} />
      })
    );
  }
}

export default App;
