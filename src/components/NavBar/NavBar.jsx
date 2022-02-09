import { Link } from "react-router-dom"
import * as userService from "../../utilities/users-service"
import "./NavBar.css"

function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
    
  return (
    <nav className="NavBar">
      <div className="navbar-group">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/favorites" className="navbar-link">My Favorites</Link>
      </div>
      <div className="navbar-group">
        <p>Welcome, {user.name}!</p>
        <Link onClick={handleLogOut} to="" className="navbar-link">Log Out</Link> 
      </div>
    </nav>
  )

}

export default NavBar