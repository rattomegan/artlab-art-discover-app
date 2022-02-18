import './Pagination.css';


function Pagination({ totalItems, currentPage, setCurrentPage, updatePageInfo}) {
   
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalItems / 30); i++) {
    pageNumbers.push(i);
  }

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
    <div className='Pagination'>
      <ul className='page-list'>
        {pageNumbers.length > 5 && 
          <button className='page-btn' onClick={goToFirstPage}> &#60;&#60; </button>
        }
        {currentPage !== 1
        &&
          <button 
            className='page-btn'
            onClick={goBackAPage}>&#60;
          </button>
        }

        {pageNumbers.filter((page) => page < (currentPage + 3) && page >= (currentPage - 2)).map(page => (
          <li key={page} className='page-item'>
            <button 
              className={`page-btn ${currentPage === page ? 'page-selected' : ''}` }
              onClick={() => updatePageInfo(page)}
            >
              {page}
            </button>
          </li>
        ))}

      <button className='page-btn' onClick={goForwardAPage}>&#62;</button>
      </ul>
    </div>
  )
}

export default Pagination;