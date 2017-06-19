import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import Perf from 'react-addons-perf';

import App from './App';

// window.Perf = Perf;
// Perf.start();

const renderApp = () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  );
};
renderApp();

// only in development, not in production
// but it is still sent to the client so if desired
// use an npm module to remove it for productionß
if (module.hot) {
  module.hot.accept('./App', () => {
    console.clear();
    renderApp();
  });
}
