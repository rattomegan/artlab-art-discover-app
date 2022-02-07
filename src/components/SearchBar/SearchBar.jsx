function SearchBar({ searchTerm, setSearchTerm, handleSearch }) {
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
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar