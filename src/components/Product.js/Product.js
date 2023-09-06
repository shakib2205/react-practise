import React from 'react';
import './Product.css'
const Product = (props) => {
    const {img, name, price, ratings, seller
    } =props.product;
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className='product-info'>
                <h5 className='product-name'>{name}</h5>
                <p>Price: ${price}</p>
                <p><small>Ratings:{ratings}</small></p>
                <p><small>Seller:{seller}</small></p>
           </div>
           <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
            <p className='btn-text'>Add to Cart</p>
           </button>
        </div>
        
    );
};
export default Product;