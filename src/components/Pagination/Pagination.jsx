import "./Pagination.css";


function Pagination({ totalItems, currentPage, setCurrentPage, updatePageInfo}) {
   
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

  function goToFirstPage() {
    setCurrentPage(1)
  }


  return (
    <div className="Pagination">
      <ul className="page-list">
        {pageNumbers.length > 5 && 
          <button className="page-btn" onClick={goToFirstPage}> &#60;&#60; </button>
        }
        {currentPage !== 1
        &&
          <button 
            className="page-btn"
            onClick={goBackAPage}>&#60;
          </button>
        }

        
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

        {pageNumbers.filter((page) => page < (currentPage + 3) && page >= (currentPage - 2)).map(page => (
          <li key={page} className="page-item">
            <button 
              className={`page-btn ${currentPage === page ? 'page-selected' : ''}` }
              onClick={() => updatePageInfo(page)}
            >
              {page}
            </button>
          </li>
        ))}

      <button className="page-btn" onClick={goForwardAPage}>&#62;</button>
      {/* <button>Go to last page</button> */}
      </ul>
    </div>
  )
}

export default Pagination                                                                                                                                                                                                                                                                                                                                                                                        