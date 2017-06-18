import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from './../data.json';

const FourOhFour = () => <h1>404</h1>;

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            path="/search"
            component={props => <Search shows={preload.shows} {...props} />}
          />
          <Route
            path="/details/:id"
            component={props => (
              <Details
                show={preload.shows.find(
                  show => show.imdbID === props.match.params.id
                )}
                {...props}
              />
            )}
          />
          <Route component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
