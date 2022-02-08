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

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { 
        user ? 
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/" element={<MainPage />} />
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
