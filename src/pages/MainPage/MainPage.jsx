import { useState, useEffect } from "react";
import Board from "../../components/Board/Board"
import SearchBar from "../../components/SearchBar/SearchBar"

function MainPage() {
  const [searchTerm, setSearchTerm] = useState('sunflowers');
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    fetchAllItems()
  }, [])

  async function fetchAllItems() {
    const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchTerm}`)
    .then(res => res.json())
    .then(allItems => {
      setAllItems(allItems.objectIDs.splice(0, 50))
    })
  }


  return (
    <main>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} fetchAllItems={fetchAllItems} />
      <h1>User's home page</h1>
      <Board allItems={allItems}/>
    </main>
  )
};

export default MainPage;