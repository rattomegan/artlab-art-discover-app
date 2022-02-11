import "./App.css";
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import WelcomePage from "../WelcomePage/WelcomePage";
import MainPage from "../MainPage/MainPage"
import NavBar from "../../components/NavBar/NavBar"
import BoardItem from "../../components/BoardItem/BoardItem"
import ItemDetailPage from "../ItemDetailPage/ItemDetailPage"
import FavoritesPage from "../FavoritesPage/FavoritesPage"

function App() {
  const [user, setUser] = useState(getUser());
  const [searchTerm, setSearchTerm] = useState('sunflowers');
  const [parameterName, setParameterName] = useState(null);

  return (
    <main className="App">
      { 
        user ? 
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<MainPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} parameterName={parameter} setParameterName={setParameter} />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/:objectID" element={<ItemDetailPage />} />
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
