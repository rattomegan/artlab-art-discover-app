import { useEffect, useState } from "react";
import "./BoardItem.css"

function BoardItem({ itemID }) {
  const [boardItem, setBoardItem] = useState('')

  // Fetch specific item by ID
  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${itemID}`)
    .then(res => res.json())
    .then(boardItem => {
      setBoardItem(boardItem)
      console.log(boardItem);
    })
  }, [])

  return (
    <>
      <img src={boardItem.primaryImageSmall}
        className="BoardItem"
      />
    </>

 

  )
}

export default BoardItem