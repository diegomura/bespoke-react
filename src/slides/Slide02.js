import React from 'react';
import Code from '../components/Code';

const Slide02 = () => (
  <section>
    <h2>Each slide is a React component</h2>
    <br />
    <Code language="jsx">{`
      import React from 'react';

      const Slide01 = () => (
        <section>Slide 1</section>
      );

      export default Slide01;
    `}</Code>
  </section>
);

export default Slide02;
