import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../../home/components/homePage';
import Header from './Header';

const store = createStore(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Router>
            <Route path="/" component={Home} />
          </Router>
        </div>
      </Provider>
    );
  }
}
