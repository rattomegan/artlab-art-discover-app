export async function fetchAllItems(searchTerm, firstIndex, parameterName) {
  let res;
  if (parameterName) {
    res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?${parameterName}=true&q=${searchTerm}`).then(res => res.json())
  } else {
    res = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/search?q=${searchTerm}`).then(res => res.json())
  }
  if (!res.total) {
    const allItems = {
      total: res.total,
      items: {}
    }
    console.log('met-api', allItems)
    return allItems
  }
  const objectIDs = await res.objectIDs.splice(firstIndex, 30)
  const promiseArray = await objectIDs.map((id) => {
    return fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`).then(res => res.json())
  })
  const promiseItems = await Promise.all(promiseArray)
  const allItems = {
    total: res.total,
    items: promiseItems
  }
  console.log('met-api first set', allItems)
  return allItems
}