import React from 'react'
import './Header.css'
import Typed from 'react-typed'
import { FaFacebook, FaGithub, FaLinkedinIn  } from 'react-icons/fa'

const Header = () => {
    return (
        <div className='header-wraper'>
            <div className='banner'>
                <h1>Viraj Patel</h1> 
                <div className='banner-text'>
                <h3>I am front End Developer with two years of experience. Always eager to learn new technologies and enjoy playing around with it</h3>
                </div>
                <Typed 
                    className='typed-text'
                    strings={["Front End Developer", "HTML CSS", "Bootstrap" , "React JS"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <div className='social-media'>
                    <FaFacebook/>
                    <FaGithub/>
                    <FaLinkedinIn/>
                </div>
                <button className="contact" >Hire Me</button>
            </div>
        </div>
    )
}

export default Header
