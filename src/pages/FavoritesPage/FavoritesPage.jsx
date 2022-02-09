import { useState, useEffect } from "react";
import Board from "../../components/Board/Board"
import SearchBar from "../../components/SearchBar/SearchBar"

function MainPage() {
  const [searchTerm, setSearchTerm] = useState('sunflowers');
  const [allItems, setAllItems] = useState([]);


  return (
    <main>
      <h1>Favorites</h1>
    </main>
  )
};

export default MainPage;