import logo from './logo.svg';
import './App.css';
import { Typography } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    
      <Typography variant='h2' component='h2' data-test='heading'>
        First React App
      </Typography>
      </header>
    </div>
  );
}

export default App;
