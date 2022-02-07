import BoardItem from "../BoardItem/BoardItem"
import "./Board.css"

function Board({ allResults }) {
  return (
    <div className="board-container">
      {allResults.map((item, i) => {
        return <BoardItem itemID={item} key={item} />
      })}
    </div>
  )
}

export default Board;