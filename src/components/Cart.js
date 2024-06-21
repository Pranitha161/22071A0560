// CartItem.js

import React from 'react';

const Cart = ({ item, onUpdateQuantity, onRemoveItem }) => {
  const { id, name, price, quantity } = item;

  const handleUpdateQuantity = (newQuantity) => {
    onUpdateQuantity(id, newQuantity);
  };

  const handleRemoveItem = () => {
    onRemoveItem(id);
  };

  return (
    <div className="cart-item">
      <div className="item-details">
        <h3>{name}</h3>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <button onClick={() => handleUpdateQuantity(quantity - 1)} disabled={quantity <= 1}>
          -
        </button>
        <button onClick={() => handleUpdateQuantity(quantity + 1)}>+</button>
        <button onClick={handleRemoveItem}>Remove</button>
      </div>
    </div>
  );
};

export default Cart;
