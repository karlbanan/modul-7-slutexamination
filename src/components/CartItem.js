import graphicsArrowDown from "../assets/graphics/arrow-down.svg"
import graphicsArrowUp from "../assets/graphics/arrow-up.svg"

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, subFromCart } from "../actions/shopActions";

import './CartItem.css'

function CartItem({product})
{
    const dispatch = useDispatch();

    function onAddToCartClicked()
    {
        dispatch(addToCart(product.id));
    }

    function onSubFromCartClicked()
    {
        dispatch(subFromCart(product.id));
    }

    const cartCount = useSelector((state) => { 
        
        var qty = 0;
        state.cart.forEach(element => {
            if (element.productId == product.id) {
                qty = element.quantity;                
            }
        });

        return qty;
    });    

    return (
        <li className="cart-item-main">
            <div className="product-info">
                <div className="product-name-group">
                    <div className="product-name">{product.title}</div>
                    <div className="line">&nbsp;</div>
                </div>
                <div className="cart-item-price">{product.price} kr</div>
            </div>
            <div className="cart-item-qty-group">
                <a onClick={()=>{onAddToCartClicked()}}>
                    <img className="cart-item-up-down" src={graphicsArrowUp} alt="Qty Up" />
                </a>
                <div className="cart-item-qty">{cartCount}</div>
                <a onClick={()=>{onSubFromCartClicked()}}>
                    <img className="cart-item-up-down" src={graphicsArrowDown} alt="Qty Down" />
                </a>
            </div>
        </li>

    )
}

export default CartItem;

