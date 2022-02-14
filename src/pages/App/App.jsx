import "./App.css";
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import WelcomePage from "../WelcomePage/WelcomePage";
import MainPage from "../MainPage/MainPage";
import NavBar from "../../components/NavBar/NavBar";
import ItemDetailPage from "../ItemDetailPage/ItemDetailPage";
import FavoritesPage from "../FavoritesPage/FavoritesPage";

function App() {
  const [user, setUser] = useState(getUser());
  const [searchTerm, setSearchTerm] = useState('van gogh');
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParameters, setSearchParameters] = useState([
    {name: 'title', display: 'Title', selected: false},
    {name: 'artistOrCulture', display: 'Artist or Culture', selected: false},
    // {name: 'medium', display: 'Medium', selected: false}, // this will require more functionality - setting options to select the medium - maybe a nested object?
    {name: 'isHighlight', display: 'Highlight', selected: false},
    {name: 'isOnView', display: 'Currently on View at the Met', selected: false},
  ])


  return (
    <main className="App">
      { 
        user ? 
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route 
              path="/" 
              element={
                <MainPage 
                  searchTerm={searchTerm} 
                  setSearchTerm={setSearchTerm} 
                  searchParameters={searchParameters}
                  setSearchParameters={setSearchParameters}
                  currentPage={currentPage} 
                  setCurrentPage={setCurrentPage}
                />
              } 
            />      
            {/* /search/trees/page */}
            {/* the button onclick points to function that uses useNavigate hook */}
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/:objectID" element={<ItemDetailPage />} />
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
