import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductView.css';
import Productdata from './../../data';
import Star from './star.png';
import Back from './back.png';

function Productview() {
  const { id } = useParams();
  const selectCard = Productdata.find((cardObj) => cardObj.id.toString() === id);
  if (!selectCard) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <Link to='/' className='back-btn'><img height={'50px'} src={Back} alt="Back" /></Link>
      <div className='main-view-container'>
        <div className='product-img-container'>
          <img className='product-img' src={selectCard.ProductImg} alt={selectCard.name} />
        </div>
        <div className='Dis-container'>
          <span className='title'>{selectCard.Title}</span>
          <br />
          <br />
          <p>Price: {selectCard.Price}</p>
          <p>Rating: {selectCard.Rating}/5 <img className='star-img' src={Star} alt="Star" /></p>
          <p>Reviews: {selectCard.Reviews}</p>
          <p>Category: {selectCard.Categories}</p>
          <p>Sold By: {selectCard.Brand}</p>
          <p className='discription'>Product Description: {selectCard.Description}</p>
        </div>
      </div>
    </>
  );
}

export default Productview;
