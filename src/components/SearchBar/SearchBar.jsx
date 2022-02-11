function SearchBar({ searchTerm, setSearchTerm, parameterName, setParameterName, setParameterValue, fetchAllItems }) {

  function handleSelectParameter(e) {
    setParameterName(e.target.name);
    setParameterValue(true);
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
        value="Title"
        name="title" 
        value={searchTerm} 
        onChange={handleSelectParameter}
      />Title

      </div>



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