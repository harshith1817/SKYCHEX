import React from 'react';
import styled from 'styled-components';

const Box=styled.div`
width:15rem;
height:2.5rem;
display:flex;
margin-right:2rem;
margin-bottom:1rem;
border-radius:0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor:pointer;
  &:hover {
    scale : 1.075;
    transition: .5s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
`;

const Flag=styled.div`
width:10rem;
height:2.5rem;
display:flex;
padding-top:0.2rem;
padding-left:0.5rem;
`;

const Cost=styled.div`
width:3rem;
height:2.5rem;
text-align: right;
`;

const Price=styled.h3`
color:#34bcf3;
font-weight:bolder;
padding-top:0.5rem;
`;

const ImageContainer=styled.div`
height: 2rem;
width: 30%;
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-radius:1rem;
`;

const FlagName=styled.p`
padding-top:0.5rem;
padding-left:1rem;
`;
function FlagsContainer({image,Countryname}){
    return(
        <>
            <Box>
                <Flag>
                <ImageContainer>
                    <img src={image}/>
                </ImageContainer>
                <FlagName>{Countryname}</FlagName>
                </Flag>
                <Cost>
                    <Price>$110</Price>
                </Cost>
            </Box>
        </>
    );
}

export default FlagsContainer;