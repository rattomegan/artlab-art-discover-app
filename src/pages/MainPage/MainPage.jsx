import * as metAPI from "../../utilities/met-api"
import { useState, useEffect } from "react";
import Board from "../../components/Board/Board"
import SearchBar from "../../components/SearchBar/SearchBar"

function MainPage({ searchTerm, setSearchTerm, parameterName, setParameterName, setParameterValue, parameterValue }) {
  const [allItems, setAllItems] = useState(null);

  useEffect(() => {
    handleFetchAllItems(searchTerm)
  }, [])

  async function handleFetchAllItems(searchTerm) {
    if(parameterName) {
      console.log(parameterName)
      return handleFetchWithParameters(searchTerm)
    } 
    const allItems = await metAPI.fetchAllItems(searchTerm)
    console.log(allItems)
    setAllItems(allItems.items)
  }

  async function handleFetchWithParameters(searchTerm) {
    const allItems = await metAPI.fetchItemsWithParameters(searchTerm, parameterName, parameterValue)
    console.log(allItems)
    setAllItems(allItems.items)
  }

  return (
    <main>
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        handleFetchAllItems={handleFetchAllItems} 
        parameterName={parameterName} 
        setParameterName={setParameterName} 
        setParameterValue={setParameterValue} 
        // handleFetchWithParamters={handleFetchWithParameters}
      />
      {allItems ?
        <Board allItems={allItems}/>
      :
        <h2>Loading...</h2>
      }
      
    </main>
  )
};

export default MainPage;