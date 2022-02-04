import "./CartSummary.css"
import graphicsBag from "../assets/graphics/bag.svg"

import { useSelector } from 'react-redux';


function CartSummary()
{

    const productCount = useSelector((state) => { 
        
        var qty = 0;
        state.cart.forEach(element => {
            qty += element.quantity;            
        });

        return qty
    });

    return (        
        <>
        <div className="cart-circle" />
        <img className="cart-image" src={graphicsBag} alt="Cart" />
        <div className="count-circle">&nbsp;</div>
        <div className="count-text">{productCount}</div>
        </>
    )
}

export default CartSummary;