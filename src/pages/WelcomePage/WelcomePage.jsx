import "./WelcomePage.css"
import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import SlideShow from "../../components/SlideShow/SlideShow"

function WelcomePage({ setUser}) {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className="WelcomePage">
      <h1 className="welcome-title">Welcome to ArtLab</h1>

      <div className="welcome-container">

        <div className="welcome-text">
          <h2>Where you can view and save your favorite pieces from the MET's massive collection</h2>
          <button onClick={() => setShowForm(!showForm)}>{showForm ? "Hide Form" : "Sign up here or log in"}</button>
        </div>

        <div className="form-slide-container">
          {showForm 
          ?
            <AuthPage setUser={setUser} />
          :
            <div className="welcome-slideshow">
              <SlideShow />
            </div>
          }
        </div>

      </div>

    </div>
  )
}

export default WelcomePage