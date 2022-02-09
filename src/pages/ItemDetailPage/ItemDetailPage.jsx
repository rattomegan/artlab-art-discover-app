import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as boardsAPI from "../../utilities/boards-api"
import ItemDetail from "../../components/ItemDetail/ItemDetail";

function ItemDetailPage() {
  const [itemDetail, setItemDetail] = useState('')
  const [itemFromDb, setItemFromDb] = useState(null)
  let { objectID } = useParams();

  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
    .then(res => res.json())
    .then(itemDetail => {
      setItemDetail(itemDetail)
      console.log(itemDetail);
    });
    fetchItemFromDb(objectID)
  }, [])

  async function fetchItemFromDb(objectID) {
    const itemFromDb = await boardsAPI.findItemInDb(objectID);
    console.log('detail page', itemFromDb)
    setItemFromDb(itemFromDb)
  }

  async function handleAddToFavorites(itemDetail) {
    const board = await boardsAPI.addItemToBoard(itemDetail)
    fetchItemFromDb(itemDetail.objectID)
  }

  async function handleRemoveFromFavorites() {
    await boardsAPI.removeItemFromBoard(itemFromDb._id)
    setItemFromDb(null)
  }
    

  return (
    <>
      {itemDetail ? 
        <ItemDetail 
          itemDetail={itemDetail}
          itemFromDb={itemFromDb} 
          handleAddToFavorites={handleAddToFavorites}
          handleRemoveFromFavorites={handleRemoveFromFavorites}
        />
      :
        "Loading..."
      }
    </>
  )
}

export default ItemDetailPage