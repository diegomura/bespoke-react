import React from 'react';

const Slide01 = ({ deck }) => (
  <section>
    <button onClick={() => deck.next()}>
      Next!!
    </button>
  </section>
);

export default Slide01;
