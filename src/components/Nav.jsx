import React, { useState } from 'react';

function Nav() {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobile(!isMobile);
    };
  return (
    <div>
        <nav className="navbar">
      <div className="logo">
        <h1 style={{textAlign:"center"}}>YouMatter</h1>
        <p class="tagline">Shine bright, the world needs your light!</p>
      </div>
      <div className="hamburger" onClick={toggleMobileMenu}>
        &#9776;
      </div>
    </nav>
        
    </div>
  )
}

export default Nav