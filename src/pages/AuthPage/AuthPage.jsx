
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

function AuthPage({ setUser }) {


  return (
    <main>

      <SignUpForm setUser={setUser} /> 

      <LoginForm setUser={setUser} />
    </main>
  );
}

export default AuthPage;
