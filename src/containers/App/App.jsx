import "./App.css";
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import WelcomeContainer from "../WelcomeContainer/WelcomeContainer";
import MainContainer from "../MainContainer/MainContainer"
import NavBar from "../../components/NavBar/NavBar"
import BoardItem from "../../components/BoardItem/BoardItem"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import BoardContainer from "../BoardContainer/BoardContainer"

function App() {
  const [user, setUser] = useState(getUser());

//  async function fetchSearch(searchTerm) {
//   await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchTerm}`)
//   .then(res => res.json())
//   .then(searchResults => {
//     setSearchResults(searchResults.objectIDs)
//     console.log(searchResults.objectIDs);
//     shortenResultsList()
//   })
//   }

  // function shortenResultsList() {
  //   // search.results.length / 50 = pagination
  //   if (searchResults.length > 25) {
  //     shortenedResults = searchResults.splice(0, 20)
  //     return setShortenedResults(shortenedResults)
  //   } else {
  //     setShortenedResults(searchResults)
  //   }
  // }

  return (
    <main className="App">
      { 
        user ? 
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<MainContainer/>} />
            <Route path="/boards" element={<BoardContainer />} />
            <Route path="/:objectID" element={<ItemDetailContainer />} />
            {/* <Route path="/orders" element={<OrderHistoryPage />} /> */}
          </Routes>
        </>
        : 
        <>
          <WelcomeContainer setUser={setUser} />
        </>

      }
    </main>);
}

export default App;
