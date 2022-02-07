import { useState, useEffect } from "react";
import Board from "../../components/Board/Board"

function MainPage() {
  const [searchTerm, setSearchTerm] = useState('cats');
  const [allItems, setAllItems] = useState([]);


  // fetch objectIDs from API
  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchTerm}`)
    .then(res => res.json())
    .then(allItems => {
      setAllItems(allItems.objectIDs.splice(0, 50))
      console.log(allItems.objectIDs);
    })
  }, [])



  return (
    <main>
      <h1>User's home page</h1>
      <Board allItems={allItems}/>
    </main>
  )
};

export default MainPage;