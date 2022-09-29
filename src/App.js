import logo from './zinkworks-ping-pong-logo.png';
import './App.css';

import LoginForm from './LoginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
