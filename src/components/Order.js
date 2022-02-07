import "./Order.css"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import graphicsDrone from "../assets/graphics/drone.svg"

import { clearCart } from "../actions/shopActions";

function Order()
{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const cart = useSelector((state) => { return state.cart});

    const [orderResponse, setOrderResponse] = useState({});
    
    function onRestartClicked() 
    {
        navigate('/', {});        
    }

    useEffect(() => {
        if (cart.length == 0) {
            navigate('/Menu', {});
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cart })
        };
  
        fetch('http://localhost:5000/api/beans', requestOptions)
                .then(response => response.json())
                .then(data => {
                    setOrderResponse(data);
                    dispatch(clearCart());

                }) 
        clearCart();
    },[])


    let orderInfo
    orderInfo = cart.length > 0 ? (<div className="order-wait-for-it">...</div>) :
    (
        <>                
            <div className="order-ordernumber">Ordernummer <b>#{orderResponse.orderNr}</b>  </div>
            <img src={graphicsDrone}></img>
            <div className="order-text">Din beställning är på väg</div>
            <div className="order-eta"><b>{orderResponse.eta}</b> minuter</div>
            <a onClick={()=>{onRestartClicked()}}>
                <div className="restart-button">Ok, Cool!</div>            
            </a>  
        </>
    )


    return (
        <>
        <section className="order-page">
            <div className="order-main">            
                {orderInfo}                
            </div>
        </section>
        </>
    )
}

export default Order;