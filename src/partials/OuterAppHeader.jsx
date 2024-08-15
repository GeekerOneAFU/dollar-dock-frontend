import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = styled(motion.div)`
  width: 75%;
  padding: 5px 40px;
  position: absolute;
  left: 50%;
  top: 1.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-radius: 50px;
  transform: translateX(-50%);
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  img {
    max-width: 100%;
    width: 50px;
    object-fit: contain;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    transform: translate(25%, 0);
  }

  .navigator {
    color: white;
    text-decoration: none;
    font-weight: thin;
    font-size: 16px;
    padding: 6px 18px;
    margin: 0;
    border-radius: 25px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .navigator:hover {
    text-shadow: 0 0 10px white, 0 0 20px white;
  }

  .navigator.active {
    color: white;
    background-color: Teal;
    text-shadow: 0 0 10px white, 0 0 20px white;
    box-shadow: 0 0 2px white, 0 0 20px teal, 0 0 40px teal;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const headerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
};

const OuterAppHeader = () => {
    
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/login');
  };

  return (
    <Header
      variants={headerVariants}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0 }}
    >
      <img src="/logo.png" alt="logo" />
      <ul>
        <Link to="/" className={`navigator ${pathname === '/' ? 'active' : ''}`}>
          Home
        </Link>
        <Link to="/about" className={`navigator ${pathname === '/about' ? 'active' : ''}`}>
          About
        </Link>
        <Link to="/support" className={`navigator ${pathname === '/support' ? 'active' : ''}`}>
          Contact
        </Link>
      </ul>
      
      <div>
        <Link to="/login" className={`navigator ${pathname === '/login' ? 'active' : ''}`}>
            Sign-in
        </Link>
        <Link to="/signup" className={`navigator ${pathname === '/signup' ? 'active' : ''}`}>
            Sign-up
        </Link>
      </div>
    </Header>
  );
};

export default OuterAppHeader;
