import Typography from '@material-ui/core';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Typography variant="h2" component="h2" data-test="heading">
          Math Magicians
        </Typography>
      </header>
    </div>
  );
}

export default App;
