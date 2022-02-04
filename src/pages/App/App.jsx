import "./App.css";
import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import NavBar from "../../components/NavBar/NavBar"

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { 
        user ? 
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            {/* <Route path="/orders/new" element={<NewOrderPage/>} />
            <Route path="/orders" element={<OrderHistoryPage />} /> */}
          </Routes>
        </>
        : 
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<AuthPage setUser={setUser} />} />
          </Routes>
        </>

      }
    </main>);
}

export default App;
