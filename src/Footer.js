import React from "react";
import Facebook from './images/facebook.png'
import Github from './images/github.png'
import Linkedin from './images/linkedin.png'
import Twitter from './images/twitter.png'

export default function Footer(){
    return(
        <div className="footer">
            <div >
                <img src={Facebook} alt = 'facebook' width = '20px' />
                <img src={Twitter} alt = 'Twitter' width = '20px'/>
                <img src={Linkedin} alt = 'Linkedin' width = '20px'/>
                <img src={Github} alt = 'github' width = '17px'/>
            </div>
        </div>
    )
}