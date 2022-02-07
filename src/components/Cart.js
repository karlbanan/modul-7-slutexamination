import graphicsHeader from "../assets/graphics/graphics-header.svg"
import graphicsFooter from "../assets/graphics/graphics-footer.svg"
import graphicsTriangle from "../assets/graphics/triangle_white.svg"
import CartSummary from "./CartSummary.js"
import CartItem from "./CartItem";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import "./Cart.css"

function Cart()
{
    const navigate = useNavigate();
    const products = useSelector((state) => { return state.products});
    const itemsIncart = useSelector((state) => { return state.cart.length});

    function onHideCartClicked()
    {
        navigate('/Menu', {});
    }

    function onSubmitOrderClicked()
    {
        navigate('/Order', {});        
    }

    const cartSum = useSelector((state) => { 
        
        var coffeeCount = 0;
        state.cart.forEach(element => {
            if (element.productId == 1) {
                coffeeCount += element.quantity;
            }
        });

        var cakeCount = 0;
        state.cart.forEach(element => {
            if (element.productId == 7) {
                cakeCount += element.quantity;
            }
        });

        var sum = 0;
        state.products.forEach(product => { 
            state.cart.forEach(element => {
                if (element.productId == product.id) {
                    sum += element.quantity * product.price
                }
            });
        });

        const DISCOUNT = 39;
        sum -= (Math.min(coffeeCount, cakeCount) * DISCOUNT);

        return sum;
    }); 

    let orderButton = itemsIncart > 0 
        ? (<a onClick={()=>{onSubmitOrderClicked()}}><div className="cart-order-button">Take my money!</div></a>) 
        : (<></>)

    return (        
        <div className="page">
            <div className="menu-main">
                <img className="header" src={graphicsHeader} alt="Header"/>                 
                <a onClick={()=>{onHideCartClicked()}}>
                    {<CartSummary />}
                </a>


                <section className="cart">
                    <img className="cart-arrow" src={graphicsTriangle} alt="/\" />
                    <div className="cart-order-text">Din beställning</div>
                    <ul className="cart-list">
                        { products.map((product) => {                        
                            return <CartItem product={ product } key={ product.id }/>
                        })}                      
                    </ul>

                    <div className="cart-total-group">
                        <div className="cart-large-text">Total</div>
                        <div className="cart-line">&nbsp;</div>
                        <div className="cart-large-text">{cartSum} kr</div>
                    </div>
                    <div className="cart-small-text">inkl moms + drönarleverans</div>
                    
                    {orderButton}
                </section>

                <img className="footer" src={graphicsFooter} alt="Footer" />
                <div className="darkenBackground"></div>                
            </div>
        </div>       
    )
}

export default Cart;