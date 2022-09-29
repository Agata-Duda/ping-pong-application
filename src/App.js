import logo from './zinkworks-ping-pong-logo.png';
import './App.css';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LoginForm />
        <SignupForm/>
      </header>
    </div>
  );
}

export default App;
