const BASE_URL = 'https://collectionapi.metmuseum.org/public/collection/v1';
const SEARCH = '/search?';

  async function fetchAllItems(searchTerm) {
    const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchTerm}`)
    const shortItemList = res.objectIDs.splice(0, 50)
    return shortItemList
    // .then(allItems => {
    //   const shortItemList = allItems.objectIDs.splice(0, 50)
    // })
    // return shortItemList;
  }

async function fetchItemByID(itemID) {
  console.log(itemID)
  const res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${itemID}`)
  // this will return the data than I can then set to a variable in my front end function
  return res.json();
}
