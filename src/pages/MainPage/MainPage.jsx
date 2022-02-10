import * as metAPI from "../../utilities/met-api"
import { useState, useEffect } from "react";
import Board from "../../components/Board/Board"
import SearchBar from "../../components/SearchBar/SearchBar"

function MainPage({ searchTerm, setSearchTerm }) {
  const [allItems, setAllItems] = useState(null);

  useEffect(() => {
    handleFetchAllItems(searchTerm)
  }, [])

  async function handleFetchAllItems(searchTerm) {
    const allItems = await metAPI.fetchAllItems(searchTerm)
    console.log(allItems)
    setAllItems(allItems)
  }


  return (
    <main>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} fetchAllItems={metAPI.fetchAllItems} />
      {allItems ?
        <Board allItems={allItems}/>
      :
        <h2>Loading...</h2>
      }
      
    </main>
  )
};

export default MainPage;