import React, { useState, useEffect } from "react"
import './Nav.scss';

function Nav() {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 200)
        })
    }, [])
  return (    
    <div className={scroll ? "nav-container background-white" : "nav-container"}>
        <div className="nav container">
            <div>
                <div className="circle">circle</div>
                <ul>
                    <li><a href='#' className="only-on-white">Mountains</a></li>
                </ul>
                
            </div>
            <ul>
                <li><a href="#HISTORY" smooth="true">01. HISTORY</a></li>
                <li><a href="#TEAM" smooth="true">02. TEAM</a></li>
            </ul>
        </div>
    </div>
  );
}

export default Nav;
