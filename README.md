# Movie App - React

[gh-page]: http://btholt.github.io/complete-intro-to-react/

## Getting started

```sh
# run api server
yarn api

# run app
yarn dev
```

## Cool tech included:

- Server side rendering including routing with React Router
- Code splitting
- React
- Preact
- Redux
- Hot Module Replacement
- Styled Components

## Notes

- Use `enzyme`'s `shallow` instead of `renderer` to test only the current component.

```javascript
import React from 'react';
import { shallow } from 'enzyme';

import Search from './../Search';

describe('Search', () => {
  it('renders correctly', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
  });
});
```

instead of

```javascript
import React from 'react';
import renderer from 'react-test-renderer';

import Search from './../Search';

describe('Search', () => {
  it('renders', () => {
    const component = renderer.create(<Search />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
```


- Order of file extensions to be evaluated

`webpack.config.js`

```javascript
resolve: {
  // order of extensions to be evaluated
  extensions: ['.js', '.jsx', '.json'],
},
```

- Set env variable in npm scripts usinng `cross-env` module so that it works for other shells and OSs

`package.json`

```javascript
{
  "scripts": {
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.prod.js"
  }
}
```

- Ways to render using `enzyme`

```javascript
 { shallow } from 'enzyme';
 { render } from 'enzyme';  // deeper than above but slow
 { static } from 'enzyme';  // even deeper, using cheerio
```

- Skip test by adding `x` before `it` or `describe`, e.g.

```javascript
xit('renders correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});
```

- `react-addons-perf`. Try below, altough it will change for React 16

`ClientApp.js` / `index.js`

```javascript
import Perf from 'react-addons-perf';

window.Perf = Perf;
Perf.start();
```

The above will start recording. Browse around. Go to console in Chrome:
```javascript
Perf.stop();
Perf.printWaster();
```
