function SearchBar({ searchTerm, setSearchTerm, handleFetchAllItems }) {

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
        onClick={() => handleFetchAllItems(searchTerm)}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar