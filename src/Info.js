import React from "react";
import Image from './images/woman2.jpg'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'
function Info() {
    return (
        <>
            <div className="parent">
                <div>
                    <img src={Image} alt='user' className="image1"/>
                </div>
                <div className="texts">
                    <h3>Laura Smith</h3>
                    <p>FrontEnd Developer</p>
                </div>
                <div className="buttons">
                    <button className="email "><i class="fa fa-envelope" aria-hidden="true"></i> Email</button>
                    <button className="linkedin"><i class="fa fa-linkedin" aria-hidden="true"></i> Linkedin</button>
                </div>

                <About/>
                <Interests/>
                 <Footer />   
            </div>
        </>
    )
}

export default Info;