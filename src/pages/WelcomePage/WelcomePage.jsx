import { Link } from "react-router-dom";
import "./WelcomePage.css"
import AuthPage from "../AuthPage/AuthPage";
import SlideShow from "../../components/SlideShow/SlideShow"

function WelcomePage({ setUser}) {
  return (
    <div className="WelcomePage">
      <div className="welcome-container">

        <div className="welcome-text">
          <h1 className="welcome-title">Welcome to ArtLab</h1>
          <h2 className="welcome-text">Where you can view and save your favorite pieces from the MET's massive collection</h2>
          <AuthPage setUser={setUser} />
          {/* <Link to="/signup">Sign Up</Link> */}
        </div>

        <div className="welcome-slideshow">
          <SlideShow />
        </div>
      </div>
    </div>
  )
}

export default WelcomePage