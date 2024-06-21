import React from 'react';
import './Productcard.css';
import { Link } from 'react-router-dom';

// Ensure ButtonBox component is imported correctly


function ProductCards({ id, ProductImg, Title, Price, Categories }) {
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'makeup':
        return '#FFC0CB'; // Pink
      case 'fashion':
        return '#99ffff'; // Orange
      case 'body & bath':
        return '#ffccb3'; // Blue
      case 'skin':
        return '#ff8080'; // Green
      case 'hair':
        return '#FFD700'; // Gold
      default:
        return '#607D8B'; // Default Grey
    }
  };

  return (
    <Link
      className="ProductCard"
      onClick={() => alert('Page is loaded successfully ✅')}
      to={`/Productview/${id}`}
    >
      <div className="image">
        <img className="Productimg img-fluid" src={ProductImg} alt={Title} />
      </div>
      <br />
      <div className="info">
        <h3 className='cards-title fs-6'>
          {Title.length > 51 ? `${Title.substring(0, 51)}...` : Title}
        </h3>
        <p>Price: {Price}</p>
        <span className="btn-box">
          <button className='btn2'>View Details</button>
        </span>
        <br />
        <button
          className='tags'
          style={{ backgroundColor: getCategoryColor(Categories) }}
        >
          {Categories}
        </button>
      </div>
    </Link>
  );
}

export default ProductCards;
