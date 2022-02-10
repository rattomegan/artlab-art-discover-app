function SearchBar({ searchTerm, setSearchTerm, fetchAllItems }) {

  function handleSearch(e) {
    e.preventDefault()
    alert('clicked')
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
        onClick={() => {fetchAllItems(searchTerm)}}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar