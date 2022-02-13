import "./Pagination.css";
import { useEffect, useState } from "react";

function Pagination({ totalItems, currentPage, setCurrentPage, updatePageInfo}) {
  const [pageRangeCeil, setPageRangeCeil] = useState(currentPage + 4)
  const [pageRangeFloor, setPageRangeFloor] = useState(currentPage)
   
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalItems / 30); i++) {
    pageNumbers.push(i);
  }

//   useEffect(()=> {
//     updatePageRange()
//   }, [currentPage])

//   function updatePageRange() {
//     const lastPage = pageNumbers.length
//     const firstPage = 1 
//     const SHOW_PAGE_RANGE = 5
// // currentPage + 5

//     const firstPage = currentPage * ITEMS_PER_PAGE;
//     const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE
//   }

  function goBackAPage() {
    let backPage = currentPage - 1
    setCurrentPage(backPage)
  }

  function goForwardAPage() {
    let nextPage = currentPage + 1;
    setCurrentPage(nextPage)
  }

  return (
    <div className="Pagination">
      <ul className="page-list">
      <button onClick={goBackAPage}>Back</button>
        {/* This is filtering results to cut down on page numbers */}
        {/* {pageNumbers.filter((page, idx) => idx < 10).map(page => (
          <li key={page} className="page-item">
            <button 
              className={`page-btn ${currentPage === page ? 'page-selected' : ''}` }
              onClick={() => updatePageInfo(page)}
            >
              {page}
            </button>
          </li>
        ))} */}

        {pageNumbers.filter((page) => page < (currentPage + 4) && page >= (currentPage - 3)).map(page => (
          <li key={page} className="page-item">
            <button 
              className={`page-btn ${currentPage === page ? 'page-selected' : ''}` }
              onClick={() => updatePageInfo(page)}
            >
              {page}
            </button>
          </li>
        ))}

      <button onClick={goForwardAPage}>Next</button>
      </ul>
    </div>
  )
}

export default Pagination                                                                                                                                                                                                                                                                                                                                                                                        