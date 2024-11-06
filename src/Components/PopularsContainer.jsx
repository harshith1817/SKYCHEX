import React from 'react';
import styled from 'styled-components';

const Box=styled.div`
height:16rem;
width:14rem;
border-radius:1rem;
backgroung-color:white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  cursor:pointer;
  &:hover {
    scale : 1.075;
    transition: .5s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }
`;

const ImageContainer=styled.div`

height: 12rem;
width: 100%;
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-radius:1rem;
`;

const PlaceandCost=styled.div`
display:flex;
`;
const Place=styled.div`
height:4rem;
width:7rem;
padding-top:0.5rem;
padding-left:1rem;
`;

const Cost=styled.div`
height:4rem;
width:7rem;
padding-top:0.5rem; 
padding-right: 1rem;
text-align: right;
`;

const City=styled.h3`

`;

const Country=styled.p`
color:#a8acae;
`;

const Price=styled.h3`
color:#34bcf3;
font-weight:bolder;
`;

const Startingat=styled.p`
color:#a8acae;
`;

function PopularsConatiner({city,country,image}){
    return(
        <Box>
            <ImageContainer>
                <img src={image}/>
            </ImageContainer>
            <PlaceandCost>
            <Place>
                <City>{city}</City>
                <Country>{country}</Country>
            </Place>
            <Cost>
                <Price>$110</Price>
                <Startingat>Starting at</Startingat>
            </Cost>
            </PlaceandCost>
        </Box>
    );
}

export default PopularsConatiner;