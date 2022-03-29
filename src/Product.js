import React from 'react';
import './Product.css';

function Product({ id, title, image, price, rating }) {
  return (
      
    <div className='product'>
        <div className="product__info">
            <span className='product__title'>{title}</span>
            <span className='product__price'><small>$</small>
            <strong>{price}</strong>
            </span>
            <div className="product__rating">
                {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>
                ))}
                
            </div>
        </div>
        <img src={image} alt="" />

        <button>Add to Basket</button>
    </div>
  )
}

export default Product