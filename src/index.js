import React from 'react';
import ReactDOM from 'react-dom';
import nebula from 'bespoke-theme-nebula';
import classes from 'bespoke-classes';
import keys from 'bespoke-keys';
import touch from 'bespoke-touch';
import App from './components/App';

const MOUNT_ELEMENT = document.getElementById('root');

const plugins = [
  nebula(),
  classes(),
  keys(),
  touch(),
];

ReactDOM.render(
  <App
    mountElement={MOUNT_ELEMENT}
    plugins={plugins}
  />,
  MOUNT_ELEMENT
);
