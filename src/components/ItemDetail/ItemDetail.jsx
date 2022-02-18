import { Link } from 'react-router-dom';
import './ItemDetail.css';


function ItemDetail({ itemDetail, handleAddToFavorites, itemFromDb, handleRemoveFromFavorites }) {


  return (
    <div className='itemdetail-container'>
      <div className='item-img'>
        <img src={`${itemDetail.primaryImageSmall}`} alt={itemDetail.title} />
      </div>
      <div className='item-text'>
        <p>{itemDetail.title}</p>
        <p>{itemDetail.medium}</p>
        <p>{itemDetail.dimensions}</p>
        <p>{itemDetail.artistDisplayName}</p>
        <p>{itemDetail.artistDisplayBio}</p>
      </div>
      {itemFromDb ? 
        <button 
          onClick={handleRemoveFromFavorites}
          style={{backgroundColor: 'peachpuff', color: '#333'}}
          >Remove from Favorites
        </button>
        : 
        <button onClick={() => handleAddToFavorites(itemDetail)}>Save to Favorites</button>
      }
      
      <Link to='/' className='detail-back-link'>Back</Link>
    </div>
  )
}

export default ItemDetail;