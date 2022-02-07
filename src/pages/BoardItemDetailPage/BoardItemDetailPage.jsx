import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function BoardItemDetailPage () {
  const [itemDetail, setItemDetail] = useState('')
  let { objectID } = useParams();


  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
    .then(res => res.json())
    .then(itemDetail => {
      setItemDetail(itemDetail)
      console.log(itemDetail);
    })
  }, [])

  return (
    <>
      {itemDetail ? 
        <div className="BoardItemDetailPage container">
          <div className="item-img">
            <img src={`${itemDetail.primaryImageSmall}`} alt={itemDetail.title} />
          </div>
          <div className="item-text">
            <p>{itemDetail.title}</p>
            <p>{itemDetail.medium}</p>
            <p>{itemDetail.dimensions}</p>
            <p>{itemDetail.artistDisplayName}</p>
            <p>{itemDetail.artistDisplayBio}</p>
          </div>
          <button>Save to Favorites</button>
          <Link to="/">Back to home</Link>
        </div>
      :
        "Loading..."
      }
    </>
  )
}

export default BoardItemDetailPage