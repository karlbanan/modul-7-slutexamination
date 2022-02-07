import introGraphicsLeft from "../assets/graphics/intro-graphic-left.svg"
import introGraphicsRight from "../assets/graphics/intro-graphic-right.svg"
import airbeanLanding from "../assets/graphics/airbean-landing.svg"
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import './Splash.css'

function Splash()
{
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => { 
            navigate('/Menu',{});
        }, 3000)    
    },[])

    return (
        <div className="page">
            <div className="splash-main">
                <img className="left" src={introGraphicsLeft} alt="Left side"/>
                <img className="middle" src={airbeanLanding} alt="logo" />
                <img className="right" src={introGraphicsRight} alt="Right side" />
            </div>
        </div>       
    )
}

export default Splash;