import React from 'react';
import styled from 'styled-components';
import TitleContainer from '../../Components/TitleContainer';
import HomeButtonContainer from '../../Components/HomeButtonContainer';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height:25rem;
  position: absolute;
  top: 0;
`;

const LoginTitle = styled.h1`
  font-size: 2.75rem;
  color: #333;
  margin-top: 10rem; /* Adds space below TitleContainer */
`;

const Logindetails=styled.div`

`;
const Emailcontainer=styled.div`
display:flex;
padding-top:2rem;
`;

const Passwordconatiner=styled.div`
display:flex;
padding-top:1rem;
`;
const Email=styled.p`
font-size:1.5rem;
padding-right:2rem;
padding-left:0.5rem;
`;

const Emailinput=styled.input`
border:none;
border-radius:0.5rem;
`;

const Passwordinput=styled.input`
border:none;
border-radius:0.5rem;
`;

const Password=styled.p`
font-size:1.5rem;
padding-right:0.3rem;
`;

const Submit=styled.button`
    width: 6.5rem;
    height: 2rem; 
    font-weight: bold;
    color: #3f5780;
    background-color: #34bcf3;
    border:none;
    border-radius:1rem;
    margin-top:1.5rem;
    cursor:pointer;
`;

function Login() {
  return (
    <LoginContainer>
      <img 
          src="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/AirportBackground.png" 
          alt="background" 
          className='bg' 
          style={{ 
            position: 'fixed', 
            width: '100%', 
            height: '140%', 
            objectFit: 'cover', 
            zIndex: -1,
            scale: 1.4
          }}
        />
      <HomeButtonContainer></HomeButtonContainer>
      <TitleWrapper>
        <TitleContainer/>
      </TitleWrapper>
      <LoginTitle>Login</LoginTitle>
      <Logindetails>
        <Emailcontainer>
            <Email>Email:</Email>
            <Emailinput></Emailinput>
        </Emailcontainer>
        <Passwordconatiner>
            <Password>Password:</Password>
            <Passwordinput></Passwordinput>
        </Passwordconatiner>
      </Logindetails>
      <Submit>Submit</Submit>
    </LoginContainer>
  );
}

export default Login;
