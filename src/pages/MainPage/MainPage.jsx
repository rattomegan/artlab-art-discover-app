import * as metAPI from "../../utilities/met-api"
import { useState, useEffect } from "react";
import Board from "../../components/Board/Board"
import SearchBar from "../../components/SearchBar/SearchBar"

function MainPage({ searchTerm, setSearchTerm, parameterName, setParameterName }) {
  const [allItems, setAllItems] = useState(null);

  useEffect(() => {
    handleFetchAllItems(searchTerm)
  }, [])

  async function handleFetchAllItems(searchTerm) {
    if (parameterName) {
      const allItems = await metAPI.fetchParameterItems(searchTerm, parameterName, parameterValue)
      console.log(allItems)
      setAllItems(allItems.items)
      // do I need a return statement here?
    }
    const allItems = await metAPI.fetchAllItems(searchTerm)
    console.log(allItems)
    setAllItems(allItems.items)
  }


  return (
    <main>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} fetchAllItems={metAPI.fetchAllItems} parameter={parameter} setParameter={setParameter}/>
      {allItems ?
        <Board allItems={allItems}/>
      :
        <h2>Loading...</h2>
      }
      
    </main>
  )
};

export default MainPage;