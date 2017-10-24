import React from 'react';
import ReactDOM from 'react-dom';
import cube from 'bespoke-theme-cube';
import classes from 'bespoke-classes';
import keys from 'bespoke-keys';
import touch from 'bespoke-touch';
import progress from 'bespoke-progress';
import prism from 'bespoke-prism';
import App from './components/App';

const MOUNT_ELEMENT = document.getElementById('root');

const plugins = [
  cube(),
  classes(),
  keys(),
  touch(),
  progress(),
  prism(),
];

ReactDOM.render(
  <App
    mountElement={MOUNT_ELEMENT}
    plugins={plugins}
  />,
  MOUNT_ELEMENT
);
