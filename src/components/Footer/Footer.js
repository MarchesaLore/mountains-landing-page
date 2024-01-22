
import './Footer.scss';
import React from 'react';

function Footer() {
  return (
    <footer class="blue-background">
        <div class="container">
            
            <div className="circle">circle</div>
            <div><span>COPYRIGHT {(new Date().getFullYear())}. ALL RIGHTS RESERVED.</span></div>
        </div>
    </footer>
  );
}

export default Footer;
