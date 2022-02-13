import "./Pagination.css";

function Pagination({ totalItems, setCurrentPage, updatePageInfo}) {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalItems / 30); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="Pagination">
        {pageNumbers.map(page => (
          <li key={page} className="page-item">
            <button className="page-btn" onClick={() => updatePageInfo(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination