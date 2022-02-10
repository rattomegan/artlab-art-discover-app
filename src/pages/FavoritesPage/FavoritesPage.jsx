import { useState, useEffect } from "react";
import * as boardsAPI from "../../utilities/boards-api"
import Board from "../../components/Board/Board"
import SearchBar from "../../components/SearchBar/SearchBar"

function FavoritesPage() {
  const [allItems, setAllItems] = useState([]);

  useState(() => {
    fetchFavoritesfromDb()
  },[])

  async function fetchFavoritesfromDb() {
    const allItems = await boardsAPI.fetchFavorites()
    // console.log(allItems)
    setAllItems(allItems)
  }

  return (
    <main>
      <h1>Favorites</h1>
      <Board allItems={allItems} />
    </main>
  )
};

export default FavoritesPage;

