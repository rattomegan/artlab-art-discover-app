// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BoardItem.css";

function BoardItem({ item }) {
  return (
    <>
    {item ?
    <div >
        <Link to={`/${item.objectID}`}>
          <img className="BoardItem" src={item.primaryImageSmall}
          />
        </Link>
    </div>


    :
    <div>No Results</div>
    }

    </>
  )
}

export default BoardItem