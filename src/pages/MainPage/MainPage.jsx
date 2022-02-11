import * as metAPI from "../../utilities/met-api"
import { useState, useEffect } from "react";
import Board from "../../components/Board/Board"
import SearchBar from "../../components/SearchBar/SearchBar"
import Pagination from "../../components/Pagination/Pagination"

function MainPage({ searchTerm, setSearchTerm, parameterName, setParameterName, setParameterValue, parameterValue }) {
  const [allItems, setAllItems] = useState(null);
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 30 // 


  useEffect(() => {
    handleFetchAllItems(searchTerm)
  }, [currentPage])

  async function handleFetchAllItems(searchTerm) {
    // if(parameterName) {
    //   console.log(parameterName)
    //   return handleFetchWithParameters(searchTerm)
    // } 
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE
    const allItems = await metAPI.fetchAllItems(searchTerm, indexOfFirstItem, indexOfLastItem)
    console.log(allItems)
    setTotalItems(allItems.total)
    setAllItems(allItems.items)
  }

  async function handleFetchWithParameters(searchTerm) {
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE
    const allItems = await metAPI.fetchItemsWithParameters(searchTerm, parameterName, parameterValue, indexOfFirstItem, indexOfLastItem)
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
        parameterValue={setParameterValue}
        setParameterValue={setParameterValue} 
      />
      {allItems ?
        <Board allItems={allItems}/>
      :
        <h2>Loading...</h2>
      }
      <Pagination totalItems={totalItems} setCurrentPage={setCurrentPage} />
    </main>
  )
};

export default MainPage;