import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";


function ItemDetail({ itemDetail}) {
  return (
    <div className="ItemDetail container">
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
  )
}

export default ItemDetail