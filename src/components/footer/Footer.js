import React from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const Footer = () => {
    return (
        <a name='foot-con'>
            <div className='footer-container'>
                <h2>Lets get in touch!</h2>
                <footer>
                    <p>mattkuras@gmail.com</p>
                    <p>732-664-2548</p>
                </footer>
                <ul className='footer-social-list'>
                    <a href="https://github.com/mattkuras">
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/matthew-kuras-72a7711b5/">
                        <AiFillLinkedin />
                    </a>
                    <a href="https://docs.google.com/document/d/1C0SZOLD4BQdhu0hVqywGrrSIKsbuFzAdNm9l2L7fGRE/edit?usp=sharing">
                        <CgFileDocument />
                    </a>
                </ul>
            </div>
        </a>

    )
}

export default Footer