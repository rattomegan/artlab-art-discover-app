import AdvancedSearchOption from "../AdvancedSearchOption/AdvancedSearchOption";
import { useState } from "react";

function SearchBar({ searchTerm, setSearchTerm, handleFetchAllItems, searchParameters, setSearchParameters }) {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false)

  // function handleSelectParameter(e) {
  //   console.log(parameterValue)
  //   setParameterName(e.target.name);
  //   setParameterValue(!parameterValue);
  // }
  

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

      <button onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}>
        {showAdvancedSearch ? "Hide Search Options"  : "More Search Options"} 
      </button>
      {showAdvancedSearch &&
      <div>
      {searchParameters.map((p, i) => (
        <AdvancedSearchOption parameter={p} key={i} />
        ))}
      </div>
      }

    </div>
  )
}

export default SearchBar