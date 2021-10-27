import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calculate from './pages/Calculate';
import Home from './pages/Home';
import Quotes from './pages/Quotes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/quotes">
              <Quotes />
            </Route>
            <Route path="/calculator">
              <Calculate />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
