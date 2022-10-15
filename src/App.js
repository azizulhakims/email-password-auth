import { getAuth } from 'firebase/auth'
import './App.css';
import app from './firebase/firebase.init';

const auth = getAuth(app)
const handleRegister = (event) => {
  const email = event.target.email.value;
  const password = event.target.password.value;
  event.preventDefault();
  console.log(email, password)
}

const handleEmailBlur = event => {
  console.log(event.target.value);
}

const handlePasswordChange = event => {
  console.log(event.target.value);
}

function App() {
  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <input onBlur={handleEmailBlur} type="email" name="email" placeholder='Your Email' id="" />
        <br />
        <input onChange={handlePasswordChange} type="password" name="password" placeholder='Your Password' id="" />
        <br />
        <button type='submit'>Resister</button>
      </form>
    </div>
  );
}

export default App;
