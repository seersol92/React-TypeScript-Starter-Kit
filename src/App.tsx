import * as React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Layout from './layout';
import Routes from './routes'

const  App = () => {
    return (
      <Router>
          <Layout>
          {
            Routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
            ))
          }
          </Layout>
      </Router>
    );
}

export default App;
