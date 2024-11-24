import React from 'react'
import { useState } from 'react'
import Card from './card.jsx'
function Hero(){
    const typed = ()=>{
        const [type, setTypes] = usestate(["Strength", "Fat-loss", "Calisthenics", "Weights"]);
    
    return(
    <div className="hero-user">
        <div className="front">
            <h1>Welcome Back, User</h1>
            <div className="below">
            <div className="cards">
                <Card {...type[0]}/>
                <Card {...type[1]}/>
                <Card {...type[2]}/>
                <Card {...type[3]}/>
            </div>
            </div>
        </div>
    </div>
    )
}
}
export default Hero