import BoardItem from "../BoardItem/BoardItem"
import "./Board.css"

function Board({ allItems }) {

  // const items = allItems.map((item, i) => {
  //   return <BoardItem item={item} key={item} />
  // })

  // const items = allItems.map((item, i) => {
  //   return <BoardItem item={item} key={item.apiID} />
  // })





  return (
    <div className="board-container">
      {allItems.map((item) => {
        // the key MUST remain 'item' instead of the index number to keep the searchbar working
        return <BoardItem item={item} key={item} />
      })}
    </div>
  )
}

export default Board;

