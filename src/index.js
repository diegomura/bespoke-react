import bespoke from 'bespoke';
import nebula from 'bespoke-theme-nebula';
import classes from 'bespoke-classes';
import keys from 'bespoke-keys';
import touch from 'bespoke-touch';

bespoke.from('#root', [
  nebula(),
  classes(),
  keys(),
  touch(),
]);
