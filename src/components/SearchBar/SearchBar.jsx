import { useState } from "react";

function SearchBar({ fetchSearch }) {
  const [searchTerm, setSearchTerm] = useState('');


  function handleSearch(e) {
    e.preventDefault()
    alert('clicked')
    fetchSearch(searchTerm)
  }


  return (
    <div>
      <input 
        type="search" 
        placeholder="Search by Artist, title, keyword, ect." 
        name="q" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button 
        className="btn" 
        onChange={handleSearch}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar