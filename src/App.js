import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Calculate from './pages/Calculate';
import Home from './pages/Home';
import Quotes from './pages/Quotes';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: <Home />,
  },
  {
    name: 'Calculator',
    path: '/calculator',
    component: <Calculate />,
  },
  {
    name: 'Quotes',
    path: '/quotes',
    component: <Quotes />,
  },
];

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Navbar />
    <Switch>
      {routes.map(({ path, component }) => (
        <Route exact key={path} path={path}>{component}</Route>))}
    </Switch>
  </Router>
);

export default App;
