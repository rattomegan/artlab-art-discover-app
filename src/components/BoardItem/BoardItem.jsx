import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BoardItem.css";

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
      <Link to={`/${boardItem.objectID}`}>
        <img src={boardItem.primaryImageSmall}
          className="BoardItem"
        />
      </Link>
    </>

 

  )
}

export default BoardItem