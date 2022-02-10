
export async function fetchAllItems(searchTerm) {
  const res  = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchTerm}`).then(res => res.json())
  const objectIDs = res.objectIDs.splice(0, 50)
  const promiseArray = objectIDs.map((id) => {
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`).then(res => res.json())
  })
  const allItems = await Promise.all(promiseArray)
  return allItems
}
