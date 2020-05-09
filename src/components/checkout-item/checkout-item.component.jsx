import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart,addItemToCart,removeItem } from '../../redux/cart/cart.actions';

function CheckoutItem({ cartItem, remove,addItem,decreaseOrRemove }) {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div onClick={()=>decreaseOrRemove(cartItem)} className="arrow">&#10094;</div>
                <span className="value">{quantity}</span>
                <div onClick={()=>addItem(cartItem)} className="arrow">&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => remove(cartItem)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = ({
    remove: clearItemFromCart,
    addItem: addItemToCart,
    decreaseOrRemove:removeItem
})
export default connect(null, mapDispatchToProps)(CheckoutItem);