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
    <div className="Pagination">
      <ul className="page-list">
        {/* This is filtering results to cut down on page numbers */}
        {pageNumbers.filter((page, idx) => idx < 10).map(page => (
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