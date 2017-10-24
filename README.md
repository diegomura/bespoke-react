# bespoke-react

> Bootstrap project for easily generate [Bespoke](https://github.com/bespokejs/bespoke) presentations using React

## I want to create my own presentation
Great! That's pretty easy. All you have to do is:

```sh
# First, clone this repo
git clone git@github.com:diegomura/bespoke-react.git

# Navigate to the project and delete the git history
cd bespoke-react
rm -rf .git

# Install the dependencies
npm install

# Initialize the development server
npm start
```
<p align="right">* you can use Yarn instead of npm if you prefer</p>

## Creating a new slide
All you need to do is creating a new `SlideXX.js` file into the `slides` directory and leave the rest to bespoke-react (being `XX` consecutive ascending numbers). Your slide will be _automagically_ added to the presentation in the order you specified. Remember that to make it work, each file should export a valid React component:

```jsx
import React from 'react';

const Slide01 = () => (
  <section>Slide 1</section>
);

export default Slide01;
```

_bespoke-react will use the file names to order the slides, so it's important to name the files correctly_

## Accessing the Bespoke instance
Each Slide component will receive the Bespoke instance via the `deck` prop. You can use it for a fine-grained control of the slides flow or events handling.

```jsx
import React from 'react';

const Slide01 = ({ deck }) => (
  <section>
    <button onClick={() => deck.next()}>
      Next!!
    </button>
  </section>
);

export default Slide01;
```

For more information of what can be done, you can read more about the instance API and Events in the [official Bespoke documentation](https://github.com/bespokejs/bespoke#deck-instances).

## Setup Bespoke
This project tries to be the more _unopinionated_ as possible. This means letting you define what Bespoke plugins and themes you want to use. To add a new plugin, just go to your `src/index.js` and add one more element to the `plugins` array:

```js
import somePlugin from 'some-plugin';

const plugins = [
  // ... more plugins
  somePlugin(),
];
```

## Building
To build the project, just run:

```sh
npm run build
# or
yarn build
```

You will see the output in the `dist` folder of your project.

## Deploying to Github pages
Github pages is a great way of quickly share your presentations and code all together. That's why bespoke-react is shipped with a script to easily deploy your current code to your Github repo page. Just:

```sh
npm run deploy
#or
yarn deploy
```

You should be able to see your presentation online when this finishes executing.

## License
MIT © [Diego Muracciole](http://github.com/diegomura)
