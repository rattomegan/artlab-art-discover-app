import BoardItem from "../BoardItem/BoardItem"
import "./Board.css"

function Board({ allItems }) {
  return (
    <div className="board-container">
      {allItems.map((item, i) => {
        return <BoardItem itemID={item} key={item} />
      })}
    </div>
  )
}

export default Board;