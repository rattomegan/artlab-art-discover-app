import * as metAPI from "../../utilities/met-api"
import { useState, useEffect } from "react";
import Board from "../../components/Board/Board"
import SearchBar from "../../components/SearchBar/SearchBar"

function MainPage({ searchTerm, setSearchTerm }) {
  const [allItems, setAllItems] = useState([]);

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
      <h1>User's home page</h1>
      <Board allItems={allItems}/>
    </main>
  )
};

export default MainPage;