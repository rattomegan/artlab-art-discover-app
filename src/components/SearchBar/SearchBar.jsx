function SearchBar({ searchTerm, setSearchTerm, setParameterName, setParameterValue, handleFetchAllItems, parameterValue }) {

  function handleSelectParameter(e) {
    setParameterName(e.target.name);
    setParameterValue(!parameterValue);
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

      <div>
      <input 
        type="radio" 
        value="Artist or Culture"
        name="artistOrCulture" 
        value={searchTerm} 
        onChange={handleSelectParameter}
      />Artist or Culture
      </div>

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