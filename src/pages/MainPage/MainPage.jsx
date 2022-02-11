import * as metAPI from "../../utilities/met-api"
import { useState, useEffect } from "react";
import Board from "../../components/Board/Board"
import SearchBar from "../../components/SearchBar/SearchBar"
import Pagination from "../../components/Pagination/Pagination"

function MainPage({ searchTerm, setSearchTerm }) {
  const [allItems, setAllItems] = useState(null);
  const [totalItems, setTotalItems] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(30); // I may not need this variable




  useEffect(() => {
    handleFetchAllItems(searchTerm)
  }, [])

  async function handleFetchAllItems(searchTerm) {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const allItems = await metAPI.fetchAllItems(searchTerm, indexOfFirstItem, indexOfLastItem)
    console.log(allItems)
    setTotalItems(allItems.total)
    setAllItems(allItems.items)
  }

function handlePageClick(page) {
    setCurrentPage(page)
    handleFetchAllItems(searchTerm)
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