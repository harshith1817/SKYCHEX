import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TitleContainer from './TitleContainer';

const Navbar = styled.div`
  width: 100%;
  height: 17rem; // Original height
  position: relative;
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
`;


const Signup = styled.button`
  width: 6.5rem;
  height: 2rem;
  z-index: 1;
  color: white;
  display: flex;
  align-items: center;       /* Centers text vertically */
  justify-content: center;    /* Centers text horizontally */
  position: absolute;
  top: 15%;
  left: 80%;
  transform: translate(-50%, -50%);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: transparent;  /* Makes the background transparent */
  border: 1px solid white;        /* Adds a white border */
  cursor: pointer;                /* Changes the cursor to pointer on hover */

  &:hover {
    background-color: rgba(255, 255, 255, 0.1); /* Optional: adds a subtle hover effect */
  }
`;

const Login = styled.button`
  width: 6.5rem;
  height: 2rem;
  font-weight: bold;
  color: #3f5780;
  display: flex;
  align-items: center;       /* Centers text vertically */
  justify-content: center;    /* Centers text horizontally */
  position: absolute;
  top: 15%;
  left: 88%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: white;    /* Adds a background to contrast with the text color */
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;            /* Changes the cursor to pointer on hover */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow */

  &:hover {
    background-color: #e0e7ff; /* Lightens background on hover */
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
`;

const Slogan = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  display: flex;
  align-items: center;
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

function NavbarContainer() {
  const navigate = useNavigate();

  return (
    <Navbar>
      <NavImg>
        <img
          src='https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/nav.jpg'
          alt='NavImage'
        />
      </NavImg>
      <TitleContainer></TitleContainer>
      <Signup onClick={() => navigate('/signup')}>Sign Up</Signup>
      <Login onClick={() => navigate('/login')}>Log In</Login>
      <Heading>Let's Book Your Flight</Heading>
      <Slogan>Make your flight more memorable</Slogan>
    </Navbar>
  );
}

export default NavbarContainer;