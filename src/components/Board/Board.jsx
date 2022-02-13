import BoardItem from "../BoardItem/BoardItem"
import "./Board.css"

function Board({ allItems, totalItems }) {

  return (
    <>
      {totalItems 
      ?
        <div className="board-container">
          {allItems.map((item) => {
            // the key MUST remain 'item' instead of the index number to keep the searchbar working
            return <BoardItem item={item} key={item.objectID} />
          })}
        </div>
      :
        <div>No Results. Please change your search query</div>
    }

    </>

  )
}

export default Board;

