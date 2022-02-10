import BoardItem from "../BoardItem/BoardItem"
import "./Board.css"

function Board({ allItems }) {

  return (
    <div className="board-container">
      {allItems.map((item) => {
        // the key MUST remain 'item' instead of the index number to keep the searchbar working
        return <BoardItem item={item} key={item.objectID} />
      })}
    </div>
  )
}

export default Board;

