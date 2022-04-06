import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ uid, id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();
    
  console.log('this is the basket >>> ', basket);

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item:{
        uid: uid,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
      
    <div className='product'>
        <div className="product__info">
            <span className='product__title'>{title}</span>
            <span className='product__price'><small>$</small>
            <strong>{price}</strong>
            <span>{uid}</span>
            </span>
            <div className="product__rating">
                {Array(rating).fill(<p>⭐</p>)}
                
            </div>
        </div>
        <img src={image} alt="" />

        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product
