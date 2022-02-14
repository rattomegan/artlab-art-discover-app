import AdvancedSearchOption from "../AdvancedSearchOption/AdvancedSearchOption";
import "./SearchBar.css"
import { useState } from "react";

function SearchBar({ searchTerm, setSearchTerm, searchParameters, setSearchParameters, handleSearchClick}) {
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false)
 


  return (
    <div className="SearchBar">
      <div className="basic-search-container">
      <div className="search-bar-container">
        <input 
          type="search" 
          placeholder="Search by Artist, title, keyword, ect." 
          name="q" 
          value={searchTerm} 
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button className="show-search-btn" onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}>
          {showAdvancedSearch ? "Hide Search Options"  : "More Search Options"} 
        </button>
      </div>
        
          <button 
            className="basic-search-btn" 
            onClick={() => {
              handleSearchClick(searchTerm)
            }}
          >
            Search
          </button>

        

      </div>



      {showAdvancedSearch &&

      <div 
        className="advanced-search-container"
        // style={{
        //   display: showAdvancedSearch ? "inline-block" : "hidden"
        // }}
        >
              {/* <div>Select one search option and enter your keyword:</div> */}
        <div className="advanced-options-container">
         {searchParameters.map((p, i) => (
            <AdvancedSearchOption parameter={p} key={i} setSearchParameters={setSearchParameters} searchParameters={searchParameters} />
          ))}
        </div>

      </div>
      } 

    </div>
  )
}

export default SearchBar