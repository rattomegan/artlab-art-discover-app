import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as boardsAPI from "../../utilities/boards-api"
import ItemDetail from "../../components/ItemDetail/ItemDetail";




function ItemDetailPage() {
  const [itemDetail, setItemDetail] = useState('')
  const [favorite, setFavorite] = useState(false)
  let { objectID } = useParams();

  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
    .then(res => res.json())
    .then(itemDetail => {
      setItemDetail(itemDetail)
      console.log(itemDetail);
    })
  }, [])

  async function handleAddToFavorites(itemDetail) {
    const board = await boardsAPI.addItemToBoard(itemDetail)
    setFavorite(true);
    // if bord includes item don't show the button - or insteaed show "added to favorites"
  }

  return (
    <>
      {itemDetail ? 
        <ItemDetail 
          itemDetail={itemDetail} 
          handleAddToFavorites={handleAddToFavorites}
        />
      :
        "Loading..."
      }
    </>
  )
}

export default ItemDetailPage