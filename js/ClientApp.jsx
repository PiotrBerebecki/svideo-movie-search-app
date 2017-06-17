import React from 'react';
import { render } from 'react-dom';

import App from './App';

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};
renderApp();

// only in development, not in production
// but it is still sent to the client so if desired
// use an npm module to remove it for productionß
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
