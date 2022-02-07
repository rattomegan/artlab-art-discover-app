import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className="AuthPage">
      <div>
        <h2 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'New to ArtLab? Click here to sign up.' : 'Been here before? Click here to login.'}</h2>
      </div>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
  
    </main>
  );
}

export default AuthPage;
