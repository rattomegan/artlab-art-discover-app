import { Link } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import SlideShow from "../../components/SlideShow/SlideShow"

function WelcomePage({ setUser}) {
  return (
    <div className="WelcomePage">
      <div className="container">
        <h1>Welcome to ArtLab</h1>
        <h2>Where you can view and save your favorite pieces from the MET's massive collection</h2>
        <AuthPage setUser={setUser} />
        {/* <Link to="/signup">Sign Up</Link> */}
      </div>
      <div>
        <SlideShow />
      </div>
    </div>
  )
}

export default WelcomePage