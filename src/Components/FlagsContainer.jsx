import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 15rem;
  height: 2.5rem;
  display: flex;
  margin-right: 2rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.3s;
  
  &:hover {
    transform: scale(1.075);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 12rem;
    height: 2.3rem;
    margin-right: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-right: 2;
  }
`;

const Flag = styled.div`
  width: 10rem;
  height: 2.5rem;
  display: flex;
  padding-top: 0.2rem;
  padding-left: 0.5rem;

  @media (max-width: 768px) {
    width: 8rem;
  }
`;

const Cost = styled.div`
  width: 3rem;
  height: 2.5rem;
  text-align: right;

  @media (max-width: 768px) {
    width: 2.5rem;
  }
`;

const Price = styled.h3`
  color: #34bcf3;
  font-weight: bold;
  padding-top: 0.5rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const ImageContainer = styled.div`
  height: 2rem;
  width: 30%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }
`;

const FlagName = styled.p`
  padding-top: 0.5rem;
  padding-left: 1rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding-left: 0.5rem;
  }
`;

function FlagsContainer({ image, Countryname }) {
  return (
    <Box>
      <Flag>
        <ImageContainer>
          <img src={image} alt={`${Countryname} Flag`} />
        </ImageContainer>
        <FlagName>{Countryname}</FlagName>
      </Flag>
      <Cost>
        <Price>$110</Price>
      </Cost>
    </Box>
  );
}

export default FlagsContainer;
