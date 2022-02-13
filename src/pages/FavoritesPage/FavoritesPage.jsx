import { useState, useEffect } from "react";
import * as boardsAPI from "../../utilities/boards-api"
import Board from "../../components/Board/Board"
import SearchBar from "../../components/SearchBar/SearchBar"

function FavoritesPage() {
  const [allItems, setAllItems] = useState(null);
  const [totalItems, setTotalItems] = useState(true)

  useState(() => {
    fetchFavoritesfromDb()
  },[])

  async function fetchFavoritesfromDb() {
    const allItems = await boardsAPI.fetchFavorites()
    console.log(allItems)
    setAllItems(allItems)
    setTotalItems(allItems.length)
  }

  return (
    <main>
      <h1>Favorites</h1>
      {allItems ?
        <Board allItems={allItems} totalItems={totalItems}/>
      :
        <div>Loading...</div>
    }
      
    </main>
  )
};

export default FavoritesPage;

