import React from 'react';
import styled from 'styled-components';
import TitleContainer from '../../Components/TitleContainer';
import HomeButtonContainer from '../../Components/HomeButtonContainer';

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height:20rem;
  position: absolute;
  top: 0;
`;

const SignupTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-top: 7rem; /* Adds space below TitleContainer */
`;

const Signupdetails=styled.div`

`;

const Firstnameconatiner=styled.div`

display:flex;
padding-top:2rem;
`;
const Lastnameconatiner=styled.div`

display:flex;
padding-top:1rem;
`;

const Phonenumcontainer=styled.div`
display:flex;
padding-top:1rem;
`;

const Emailcontainer=styled.div`
display:flex;
padding-top:1rem;
`;

const Passwordconatiner=styled.div`
display:flex;
padding-top:1rem;
`;

const Firstname=styled.p`
padding-left:1.5rem;
padding-right:1.8rem;
font-size:1.5rem;
`;

const Lastname=styled.p`
padding-left:1.5rem;
padding-right:2rem;
font-size:1.5rem;
`;

const Phonenum=styled.p`
font-size:1.5rem;
padding-right:1rem;
`;

const Firstnameinput=styled.input`
border:none;
border-radius:0.5rem;
`;

const Lastnameinput=styled.input`
border:none;
border-radius:0.5rem;
`;

const Phonenuminput=styled.input`
border:none;
border-radius:0.5rem;
`;

const Email=styled.p`
font-size:1.5rem;
padding-right:4rem;
padding-left:2.5rem;
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
padding-right:2.3rem;
padding-left:2rem;
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

function Signup() {
  return (
    <SignupContainer>
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
      <SignupTitle>Signup</SignupTitle>
      <Signupdetails>
        <Firstnameconatiner>
          <Firstname>First Name:</Firstname>
          <Firstnameinput></Firstnameinput>
        </Firstnameconatiner>
        <Lastnameconatiner>
          <Lastname>Last Name:</Lastname>
          <Lastnameinput></Lastnameinput>
        </Lastnameconatiner>
        <Phonenumcontainer>
          <Phonenum>Phone Number:</Phonenum>
          <Phonenuminput></Phonenuminput>
        </Phonenumcontainer>
        <Emailcontainer>
            <Email>Email:</Email>
            <Emailinput></Emailinput>
        </Emailcontainer>
        <Passwordconatiner>
            <Password>Password:</Password>
            <Passwordinput></Passwordinput>
        </Passwordconatiner>
      </Signupdetails>
      <Submit>Submit</Submit>
    </SignupContainer>
  );
}

export default Signup;