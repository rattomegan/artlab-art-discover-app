import { useParams } from "react-router-dom";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

function AuthPage({ setUser }) {
  let { signup } = useParams();

  console.log(signup, useParams())
  return (
    <main>
      {signup === "signup" ? 
        <SignUpForm setUser={setUser} /> 
      : 
        <LoginForm setUser={setUser} />
      }      
    </main>
  );
}

export default AuthPage;
