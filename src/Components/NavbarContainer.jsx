import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TitleContainer from './TitleContainer';

const Navbar = styled.div`
  width: 100%;
  height: 17rem;
  position: relative;

  @media (max-width: 768px) {
    height: 15rem; // Slightly smaller for tablet screens
  }

  @media (max-width: 480px) {
    height: 12rem; // Even smaller for mobile screens
  }
`;

const NavImg = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }  
  @media (max-width: 480px) {
  height: 60%;
  }
`;

const Signup = styled.button`
  width: 6.5rem;
  height: 2rem;
  z-index: 1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 15%;
  left: 80%;
  transform: translate(-50%, -50%);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid white;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
  display:none;
  }

  @media (max-width: 480px) {
display:none;
  }
`;

const Login = styled.button`
  width: 6.5rem;
  height: 2rem;
  font-weight: bold;
  color: #3f5780;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 15%;
  left: 88%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e0e7ff;
  }

  @media (max-width: 768px) {
    top: 10%;
    left: 85%;
    width: 6rem;
    height: 1.8rem;
  }

  @media (max-width: 480px) {
    display:none;
  }
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: black;
  display: flex;
  align-items: center;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1.7rem;
    top: 30%;
    margin-top: 4%;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-top: 10%;
  }
`;

const Slogan = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 1rem;
    top: 45%;
    margin-top: 4%;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 15%;
  }
`;

function NavbarContainer() {
  const navigate = useNavigate();

  return (
    <Navbar>
      <NavImg>
        <img
          src="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/nav.jpg"
          alt="NavImage"
        />
      </NavImg>
      <TitleContainer />
      <Signup onClick={() => navigate('/signup')}>Sign Up</Signup>
      <Login onClick={() => navigate('/login')}>Log In</Login>
      <Heading>Let's Book Your Flight</Heading>
      <Slogan>Make your flight more memorable</Slogan>
    </Navbar>
  );
}

export default NavbarContainer;
