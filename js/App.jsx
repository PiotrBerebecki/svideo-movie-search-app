import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import AsyncRoute from './AsyncRoute';
import preload from './../data.json';
import store from './flux/store';

const FourOhFour = () => <h1>404</h1>;

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            component={props => (
              <AsyncRoute props={props} loadingPromise={import('./Landing')} />
            )}
          />
          <Route
            path="/search"
            component={props => (
              <AsyncRoute
                props={Object.assign({ shows: preload.shows }, props)}
                loadingPromise={import('./Search')}
              />
            )}
          />
          <Route
            path="/details/:id"
            component={props => {
              const selectedShow = preload.shows.find(
                show => show.imdbID === props.match.params.id
              );
              return (
                <AsyncRoute
                  props={Object.assign(
                    { show: selectedShow, match: {} },
                    props
                  )}
                  loadingPromise={import('./Details')}
                />
              );
            }}
          />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
