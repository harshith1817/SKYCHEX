import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaInstagram, FaFacebook,FaTwitter } from "react-icons/fa";
const Footer=styled.div`
width:100%;
height:23rem;
background-color:#002056;
`;

const Part1=styled.div`
height:80%;
width:100%;
display:flex;
`;

const Part2=styled.div`
width:100%;
height:20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const About=styled.div`
height:100%;
width:40%;
display:flex;
flex-direction:column;
align-items:center;
padding-top:2rem;
`;

const Book=styled.div`
height:100%;
width:20%;
color:white;
  display: flex;
  justify-content: center;
  flex-direction:column;
`;

const Bookings=styled.div`
height:100%;
width:20%;
color:white;
  display: flex;
  justify-content: center;
  flex-direction:column;
`;
const Company=styled.div`
height:100%;
width:20%;
color:white;
  display: flex;
  justify-content: center;
  flex-direction:column;
`;

const Heading=styled.h2`
margin-bottom:1rem;
`;

const Sub=styled.p`
font-size:1.2rem;
margin-bottom:0.5rem;
`;

const Logo=styled.div`
height:40%;
width:50%;
padding-left:9rem;
  img {
    width: 50%;
    height: 100%;
  }
`;

const Desctiption=styled.div`
padding-top:0.5rem;
padding-bottom:0.5rem;
color:white;
height:40%;
width:40%;
`;

const SocialMedia=styled.div`
height:30%;
width:100%;
display:flex;
justify-content:center;
gap:0.5rem;
`;

const SocialMediaDivFb = styled.a`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #1977f2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease; 

  &:hover {
    transform: scale(1.1); 
  }
`;

const SocialMediaDivTwitter = styled.a`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #1ea1f2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease; 

  &:hover {
    transform: scale(1.1); 
  }
`;

const SocialMediaDivLinkedin = styled.a`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #2967b2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease; 

  &:hover {
    transform: scale(1.1); 
  }
`;

const SocialMediaDivInsta = styled.a`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #f00073;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease; 

  &:hover {
    transform: scale(1.1);  
  }
`;

const Vision=styled.a`
  color: white;
  text-align: center;
  font-size: 1rem;
color:white;
`;
function FooterContainer() {
    return (
        <Footer>
            <Part1>
                <About>
                <Logo>
                    <img src="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/LOGO.png"/>
                </Logo>
                <Desctiption>
                    Whether you're planing a vacation, a business trip, or any other travel adventure,
                     SkyChex offers a friendly and comprehensive solution to meet your flight booking needs.
                </Desctiption>
                <SocialMedia>
                    <SocialMediaDivFb><FaFacebook /></SocialMediaDivFb>
                    <SocialMediaDivTwitter><FaTwitter /></SocialMediaDivTwitter>
                    <SocialMediaDivLinkedin><FaLinkedin/></SocialMediaDivLinkedin>
                    <SocialMediaDivInsta><FaInstagram/></SocialMediaDivInsta>
                </SocialMedia>
                </About>
                <Book>
                    <Heading>Book With Us</Heading>
                    <Sub>Airlines we ticket</Sub>
                    <Sub>Buy now, pay later</Sub>
                    <Sub>Pay the way you want</Sub>
                    <Sub>You're protected</Sub>
                    <Sub>Our customer service</Sub>
                </Book>
                <Bookings>
                    <Heading>My booking</Heading>
                    <Sub>Manage my booking</Sub>
                    <Sub>Help centre</Sub>
                    <Sub>FAQs</Sub>
                    <Sub>Contact us</Sub>
                    <Sub>Travel advice</Sub>
                </Bookings>
                <Company>
                    <Heading>Company</Heading>
                    <Sub>About us</Sub>
                    <Sub>Reviews</Sub>
                    <Sub>Blog</Sub>
                    <Sub>Media Centre</Sub>
                    <Sub>Careers</Sub>
                </Company>
            </Part1>
            <Part2>  
                <Vision>Privacy | Terms | Sitemap</Vision>
            </Part2>
        </Footer>
    );
}

export default FooterContainer;