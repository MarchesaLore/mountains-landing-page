import React, { useState, useEffect } from "react"
import './Nav.scss';

function Nav() {
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 200)
        })
    }, [])
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
  return (    
    <div className={scroll ? "nav-container background-white" : "nav-container"}>
        <div className="nav container">
            <div>
                <div className="circle">circle</div>
                <ul>
                    <li><button className="only-on-white" onClick={handleScrollToTop}>Mountains</button></li>
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
