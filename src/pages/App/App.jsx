import "./App.css";
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import WelcomePage from "../WelcomePage/WelcomePage";
import HomePage from "../HomePage/HomePage"
import NavBar from "../../components/NavBar/NavBar"
import BoardItem from "../../components/BoardItem/BoardItem"
import BoardItemDetailPage from "../BoardItemDetailPage/BoardItemDetailPage"
import SearchBar from "../../components/SearchBar/SearchBar"

function App() {
  const [user, setUser] = useState(getUser());
  const [searchResultsState, setSearchResultsState] = useState([])

 function fetchSearch(searchTerm) {
    return console.log(searchTerm) 
  }

  return (
    <main className="App">
      { 
        user ? 
        <>
          <NavBar user={user} setUser={setUser}/>
          <SearchBar fetchSearch={fetchSearch}/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/boards" element={<HomePage/>} />
            <Route path="/:objectID" element={<BoardItemDetailPage />} />
            {/* <Route path="/orders" element={<OrderHistoryPage />} /> */}
          </Routes>
        </>
        : 
        <>
          <WelcomePage setUser={setUser} />
        </>

      }
    </main>);
}

export default App;
