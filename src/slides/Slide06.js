import React from 'react';

const Slide06 = ({ deck }) => (
  <section>
    <h2>You can also control the slide flow from React</h2>
    <br />
    <button onClick={() => deck.prev()}>◄ Prev</button>
    <button onClick={() => deck.next()}>Next ►</button>
  </section>
);

export default Slide06;
