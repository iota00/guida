import { useState, useRef } from "react";
import "./App.css"
// import firebase things
import { auth, SignUp, useAuth, logout, login} from "./firebase-config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function App() {
  // loading...
  const [loading, setLoading] = useState(false);
  // user:
  const currentUser = useAuth();
  console.log(currentUser);
  // create Refs:
  const emailRef = useRef();
  const passwordRef = useRef();
  // handlers:
  async function handleSignUp (){
    setLoading(true);
    try {
      await SignUp(emailRef.current.value, passwordRef.current.value);

    } catch (e) {
      console.error(`Error SignUp: ${e}`)
    }
    setLoading(false)
  }
  async function handleLogin (){
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);

    } catch (e) {
      console.error(`Error SignIn: ${e}`)
    }
    setLoading(false)
  }

  async function handleLogout(){
    setLoading(true)
    try {
      await logout();
    }catch{
      console.error("Error LoginOut....");
    }
    setLoading(false)
  }


  return (
    <div className="App">
      <h1>Current User: {currentUser?.email}</h1>
      <div className="form">
        <input ref={emailRef} type="email" required placeholder="email" />
        <input ref={passwordRef} type="password" required placeholder="password" />
        <button disabled={loading || currentUser} onClick={handleSignUp} >SignUp</button>
        <button disabled={loading || currentUser} onClick={handleLogin} >Login</button>

      </div>
      <button disabled={loading || !currentUser} onClick={handleLogout} >Log out</button>
    </div>
  );
}

export default App;
