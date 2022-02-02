import graphicsHeader from "../assets/graphics/graphics-header.svg"
import graphicsFooter from "../assets/graphics/graphics-footer.svg"
import { useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem.js"


import './Menu.css'

function Splash()
{
    const navigate = useNavigate();

    setTimeout(() => { 
        navigate('/Menu',{});
    }, 3000)

    return (
        <div className="page">
            <div className="menu-main">
                <img className="header" src={graphicsHeader} alt="Header"/>                
                <div className="heading">Meny</div>
                <ul className="menu">
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />
                    <MenuItem />                    
                </ul>
                <img className="footer" src={graphicsFooter} alt="Footer" />
            </div>
        </div>       
    )
}

export default Splash;