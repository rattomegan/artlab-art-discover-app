import { useState } from 'react';
import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main className='AuthPage'>
      <div className='authpage-container'>
        <h2 onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'New to ArtLab? Click here to sign up.' : 'Been here before? Click here to login.'}</h2>
      {showLogin ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
  
      </div>
    </main>
  );
}

export default AuthPage;
