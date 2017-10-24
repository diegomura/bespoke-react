import React from 'react';
import Code from '../components/Code';

const Slide05 = () => (
  <section>
    <h2>And code!</h2>
    <br />
    <Code language="javascript">{`
      function fibonacci(num) {
        if (num <= 1) return 1;

        return fibonacci(num - 1) + fibonacci(num - 2);
      }

      fibonacci(10);
    `}</Code>
  </section>
);

export default Slide05;
