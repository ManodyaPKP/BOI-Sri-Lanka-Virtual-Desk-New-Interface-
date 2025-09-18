import React from 'react';

const Header = () => {
  return (
    <header>
       <div className="logo-container">
        <img 
          src="https://investsrilanka.com/wp-content/uploads/2023/08/BOILOGO-2.png" 
          alt="BOI Logo" 
          className="logo-image"
          style={{height: '60px', marginRight: '15px'}}
        />
        <div className="header-text">
          <h1>Board of Investment of Sri Lanka</h1>
          <h2>Virtual Help Desk</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;