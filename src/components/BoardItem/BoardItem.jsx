import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BoardItem.css";

function BoardItem({ item }) {
  const [boardItem, setBoardItem] = useState('')
  const [link, setLink] = useState(item)

  useEffect(() => {
    if (typeof(item) === 'number') {
      fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${item}`)
      .then(res => res.json())
      .then(boardItem => {
        setBoardItem(boardItem)
      })
    } else {
      setBoardItem(item)
      setLink(item.apiID)
      return console.log('boardItem', item._id)
    }
  }, [])

  return (
    <>
      <Link to={`/${link}`}>
        <img src={boardItem.primaryImageSmall}
          className="BoardItem"
        />
      </Link>
    </>
  )
}

export default BoardItem