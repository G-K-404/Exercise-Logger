import { useState } from 'react'
import dumbbell from './assets/dumbbell.png'
import logo from './assets/logo.png'
import stick from './assets/stick.png'
function Middle(){
    return(
        <div className="middle">
            <div className="hero">
                <div className="left">
                    <img className='image' src={dumbbell} alt="" />
                </div>
                <div className="right">
                    <form action="/" className="rightform">
                        <div className="img">
                            <img className='eagle' src={logo} alt="" />
                            <img src={stick} alt="" className="stic" />
                            <p className="title">AVGK</p>
                        </div>
                        <h1>Login</h1>
                        <input type="text" className="login" id='User' placeholder="User" autoComplete="off" autoFocus/>
                        <input type="password" className="login" id='Password' placeholder="Password"/>
                        <p className="error"></p>
                        <button type="submit" className="submit">Submit</button>
                    </form>
                </div>
            </div> 
        </div>
    )
}
export default Middle