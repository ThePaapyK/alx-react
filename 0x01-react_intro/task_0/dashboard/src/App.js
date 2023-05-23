import logo from './Holberton_Logo.jpg';
import './App.css';

function App() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>School Dashboard</h2>
    </header>
    <body className="App-body">
      <p>Login to access the full dashboard</p>
    </body>
    <footer className="App-footer">
      <p>Copyright 2020 - holberton School</p>
    </footer>
  );
}

export default App;
