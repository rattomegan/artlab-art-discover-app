import * as metAPI from "../../utilities/met-api"
import { useState, useEffect } from "react";
import Board from "../../components/Board/Board"
import SearchBar from "../../components/SearchBar/SearchBar"
import Pagination from "../../components/Pagination/Pagination"

function MainPage({ searchTerm, setSearchTerm }) {
  const [allItems, setAllItems] = useState(null);
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 30 // 




  useEffect(() => {
    handleFetchAllItems(searchTerm, currentPage)
  }, [currentPage])

  async function handleFetchAllItems(searchTerm, currentPage) {
    // this starts at 30
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    // this starts at 0
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE
    const allItems = await metAPI.fetchAllItems(searchTerm, indexOfFirstItem, indexOfLastItem)
    console.log(allItems)
    setTotalItems(allItems.total)
    setAllItems(allItems.items)
  }

function handlePageClick(page) {
    setCurrentPage(page);
    setAllItems(null);
    handleFetchAllItems(searchTerm, currentPage)
  }

  return (
    <main>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} fetchAllItems={metAPI.fetchAllItems} />
      {allItems ?
        <Board allItems={allItems}/>
      :
        <h2>Loading...</h2>
      }
      <Pagination totalItems={totalItems} handlePageClick={handlePageClick} />
    </main>
  )
};

export default MainPage;