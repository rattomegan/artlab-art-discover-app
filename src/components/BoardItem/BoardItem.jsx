// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BoardItem.css";

function BoardItem({ item }) {
  // const [boardItem, setBoardItem] = useState('')

  // useEffect(() => {
  //     setBoardItem(item)
  // }, [])


  // return (
  //   <>
  //     <Link to={`/${boardItem.objectID}`}>
  //       <img src={boardItem.primaryImageSmall}
  //         className="BoardItem"
  //       />
  //     </Link>
  //   </>
  // )

  return (
    <>
    {item ?
      <div className="BoardItem">
        <Link to={`/${item.objectID}`}>
          <img src={item.primaryImageSmall}
            className="board-img"
          />
        </Link>
      // </div>

    :
    <div>No Results</div>
    }

    </>
  )
}

export default BoardItem