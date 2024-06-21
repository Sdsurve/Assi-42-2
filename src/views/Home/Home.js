import React, { useEffect, useState } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCards from '../../components/Productcard/Productcard';
import Productdata from './../../data';

function Product() {

  return (
    <>
      <div className='main-div'>
        <div className='pcardsContainers'>
          {Productdata.map((item, i) => {
            const { 
                 id,
                 ProductImg,
                 Title, 
                 Price, 
                 Categories
                 } = item;
            return (
              <ProductCards
                key={id}
                id={id}
                ProductImg={ProductImg}
                Title={Title}
                Price={Price}
                Categories={Categories}
              />
            );
          })}
        </div>

      </div>
    </>
  );
}


export default Product;
