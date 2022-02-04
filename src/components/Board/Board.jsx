import { useState, useEffect } from "react";

function Board() {
  const [searchTerm, setSearchTerm] = useState('random');
  const [allItems, setAllItems] = useState([])


  // fetch objectIDs from API
  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchTerm}`)
    .then(res => res.json())
    .then(allItems => {
      setAllItems(allItems.objectIDs)
      console.log(allItems.objectIDs);
    })
  }, [])


  return (
    <div>
      <h1>board component</h1>
    </div>
  )
}

export default Board;