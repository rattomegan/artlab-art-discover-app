import { useState } from 'react';
import './FavoritesPage.css';
import * as boardsAPI from '../../utilities/boards-api';
import Board from '../../components/Board/Board';

function FavoritesPage() {
  const [allItems, setAllItems] = useState(null);
  const [totalItems, setTotalItems] = useState(true);

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
      <h1 className='favorites-title'>Favorites</h1>
      {allItems ?
        <Board allItems={allItems} totalItems={totalItems}/>
      :
        <div>Loading...</div>
    }
      
    </main>
  )
};

export default FavoritesPage;

