import React from 'react';

const Code = ({ language, style, className, children }) => (
  <pre style={style} className={className}>
    <code className={`language-${language}`}>
      {children.replace(/  +/g, '').trim()}
    </code>
  </pre>
);

export default Code;
