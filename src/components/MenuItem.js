import graphicsAdd from "../assets/graphics/add.svg"
import { useDispatch } from 'react-redux';
import { addToCart } from "../actions/shopActions";

import './MenuItem.css'

function MenuItem({product})
{
    const dispatch = useDispatch();

    function onAddToCartClicked()
    {
        dispatch(addToCart(product.id));
    }

    return (
        <li className="menu-item-main">
            <a onClick={()=>{onAddToCartClicked()}}>
                <img className="add-icon" src={graphicsAdd} alt="Header"/>
            </a>
            <div className="product-info">
                <div className="product-name-group">
                    <div className="product-name">{product.title}</div>
                    <div className="line">&nbsp;</div>
                </div>                    
                <div className="product-description">{product.desc}</div>
            </div>            
            <div className="price">{product.price} kr</div>
        </li>
    )
}

export default MenuItem;