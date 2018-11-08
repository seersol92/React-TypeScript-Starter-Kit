import * as React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Layout from './layout';
import Routes from './routes'

class App extends React.Component {
  public render(): JSX.Element {
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
}

export default App;
