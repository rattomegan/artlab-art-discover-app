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
      <button onClick={goToFirstPage}>Go to 1</button>
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

        {pageNumbers.filter((page) => page < (currentPage + 5) && page >= (currentPage - 4)).map(page => (
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
      {/* <button>Go to last page</button> */}
      </ul>
    </div>
  )
}

export default Pagination                                                                                                                                                                                                                                                                                                                                                                                        