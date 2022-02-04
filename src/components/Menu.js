import graphicsHeader from "../assets/graphics/graphics-header.svg"
import graphicsFooter from "../assets/graphics/graphics-footer.svg"

import MenuItem from "./MenuItem.js"
import CartSummary from "./CartSummary.js"

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';




import './Menu.css'
import { initProducts } from "../actions/shopActions";

function Menu()
{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const products = useSelector((state) => { return state.products});
    
    useEffect(() => {
        async function getProductsFromApi() {
          const response = await fetch('http://localhost:5000/api/beans');
          const data = await response.json();
          console.log('API reponse: ', data.menu);
    
          dispatch(initProducts(data.menu));
        }     

        getProductsFromApi();
    }, []);

    console.log("PRODUCTS:" + products[3]);

    function onShowCartClicked()
    {
        navigate('/Cart', {});
    }

    return (
        <div className="page">
            <div className="menu-main">
                <img className="header" src={graphicsHeader} alt="Header"/>                 
                <a onClick={()=>{onShowCartClicked()}}>
                    {<CartSummary />}
                </a>
                <div className="heading">Meny</div>
                <ul className="menu">
                { products.map((product) => {
                    return <MenuItem product={ product } key={ product.id }/>
                })}                    
                </ul>
                <img className="footer" src={graphicsFooter} alt="Footer" />
            </div>
        </div>       
    )
}

export default Menu;