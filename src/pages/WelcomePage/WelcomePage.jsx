import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="HomePage">
      <div className="container">
        <h1>Welcome to ArtLab</h1>
        <h2>Where you can view and save your favorite pieces from the MET's massive collection</h2>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  )
}

export default HomePage