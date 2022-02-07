import { useState } from "react";
import BoardContainer from "../BoardContainer/BoardContainer"
import SearchBar from "../../components/SearchBar/SearchBar"

function MainContainer() {
  const [searchTerm, setSearchTerm] = useState("sunflower");
  const [allResults, setAllResults] = useState([]);

  async function fetchSearch() {
    await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchTerm}`)
    .then(res => res.json())
    .then(allResults => {
      setAllResults(allResults.objectIDs)
    })
  }

  function handleSearch(e) {
    e.preventDefault()
    fetchSearch(searchTerm)
  }


  return (
    <main>
      <h1>User's home page</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <BoardContainer allResults={allResults} />
    </main>
  )
};

export default MainContainer;