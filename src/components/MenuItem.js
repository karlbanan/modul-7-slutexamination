import graphicsAdd from "../assets/graphics/add.svg"
import { useNavigate } from 'react-router-dom';

import './MenuItem.css'

function MenuItem()
{
    return (
        <li className="menu-item-main">
            <img className="add-icon" src={graphicsAdd} alt="Header"/>
            <div className="product-info">
                <div className="product-name">Bryggkaffe</div>
                <div className="product-description">Bryggd på månadens bönor</div>
            </div>
            <div className="line">&nbsp;</div>
            <div className="price">49 kr</div>
        </li>
    )
}

export default MenuItem;