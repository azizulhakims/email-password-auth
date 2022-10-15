import { getAuth } from 'firebase/auth'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LoginBootsrap from './components/LoginBootsrap';
import RegisterReactBootstrap from './components/RegisterReactBootstrap';
import app from './firebase/firebase.init';
import Main from './layout/Main';

// const auth = getAuth(app)
// const handleRegister = (event) => {
//   const email = event.target.email.value;
//   const password = event.target.password.value;
//   event.preventDefault();
//   console.log(email, password)
// }

// const handleEmailBlur = event => {
//   console.log(event.target.value);
// }

// const handlePasswordChange = event => {
//   console.log(event.target.value);
// }

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },

      {
        path: '/register',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/login',
        element: <LoginBootsrap></LoginBootsrap>
      },
    ]

  }
])

function App() {
  return (
    <div className="">
      {/* <RegisterReactBootstrap></RegisterReactBootstrap> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
