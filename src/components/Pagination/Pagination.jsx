import "./Pagination.css";
import { useEffect } from "react";

function Pagination({ totalItems, currentPage, setCurrentPage, updatePageInfo}) {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalItems / 30); i++) {
    pageNumbers.push(i);
  }

  // useEffect(()=> {
  //   setCurrentPage(1)
  // }, [])

  return (
    <div>
      <ul className="Pagination">
        {pageNumbers.map(page => (
          <li key={page} className="page-item">
            <button 
              className={`page-btn ${currentPage === page ? 'page-selected' : ''}` }
              onClick={() => updatePageInfo(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination