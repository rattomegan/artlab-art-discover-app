import { useState, useEffect } from "react";
import BoardItem from "../BoardItem/BoardItem"
import "./Board.css"

function Board() {
  const [searchTerm, setSearchTerm] = useState('sunflower');
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
    <div className="board-container">
      <h1>board component</h1>
      {allItems.map((item, i) => {
        return <BoardItem itemID={item} key={item} />
      })}
    </div>
  )
}

export default Board;