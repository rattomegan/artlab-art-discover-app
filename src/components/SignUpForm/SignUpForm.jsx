import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../utilities/users-service";

export default function SignUpForm({ setUser }) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState('');
  const navigate = navigate();

  const handleChange = (evt) => {
    setUserData({...userData, [evt.target.name]: evt.target.value,});
    setError('');
  };

  const handleSubmit = async (evt) => {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // We don't want to send the 'confirm' property,
      // so we make a copy of the state object, then delete them
      const formData = {...userData};
      delete formData.confirm;

      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      setUser(user);
      navigate('/')
    } catch {
      // An error occurred...
      setError("Sign Up Failed - Try Again");
    }
  };
  
  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={userData.name} onChange={handleChange} required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={userData.email} onChange={handleChange} required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={userData.password} onChange={handleChange} required />
          <label htmlFor="confirm">Confirm</label>
          <input type="password" id="confirm" name="confirm" value={userData.confirm} onChange={handleChange} required />
          <button type="submit" disabled={userData.password !== userData.confirm && "disable"}>SIGN UP</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );

}
