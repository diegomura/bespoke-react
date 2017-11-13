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

    this.state = {
      deck: null,
      currentSlide: 0,
    };
  }

  componentDidMount() {
    const { mountElement, plugins } = this.props;

    const deck = bespoke.from(mountElement, plugins);

    deck.on('activate', event => {
      this.setState({ currentSlide: event.index });
      return true;
    })

    this.setState({ deck })
  }

  render() {
    const { deck, currentSlide } = this.state;

    return (
      slides.map((slide, i) => {
        const Slide = slide.default;

        return <Slide
          key={Slide.name}
          deck={deck}
          active={currentSlide === i}
        />
      })
    );
  }
}

export default App;
