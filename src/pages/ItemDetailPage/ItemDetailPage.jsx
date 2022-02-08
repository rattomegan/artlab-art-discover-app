import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";


function ItemDetailPage() {
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
        <ItemDetail itemDetail={itemDetail} />
      :
        "Loading..."
      }
    </>
  )
}

export default ItemDetailPage