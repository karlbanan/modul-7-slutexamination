import graphicsHeader from "../assets/graphics/graphics-header.svg"
import graphicsFooter from "../assets/graphics/graphics-footer.svg"
import CartSummary from "./CartSummary.js"
import CartItem from "./CartItem";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import "./Cart.css"

function Cart()
{
    const navigate = useNavigate();
    const products = useSelector((state) => { return state.products});
    const cart = useSelector((state) => { return state.cart});

    function onHideCartClicked()
    {
        navigate('/Menu', {});
    }

    return (        
        <div className="page">
            <div className="menu-main">
                <img className="header" src={graphicsHeader} alt="Header"/>                 
                <a onClick={()=>{onHideCartClicked()}}>
                    {<CartSummary />}
                </a>
                <ul className="cart">
                    { products.map((product) => {
                        return <CartItem product={ product } key={ product.id }/>
                    })}                      
                </ul>                
                <img className="footer" src={graphicsFooter} alt="Footer" />
                <div className="darkenBackground">aa</div>
            </div>
        </div>       
    )
}

export default Cart;