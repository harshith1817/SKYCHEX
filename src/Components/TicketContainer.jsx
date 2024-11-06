import React from 'react';
import styled from 'styled-components';
import { FaSuitcase } from "react-icons/fa";

const Box = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: center;
  gap: 0.1rem; /* Adds space between Ticket and Cost */
  margin-bottom:1rem;
`;

const Ticket = styled.div`
  width: 75%;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  display:flex;
`;

const OneWay = styled.div`
height:100%;
width:50%;
`;

const Return = styled.div`
height:100%;
width:50%;
`;

const Cost = styled.div`
  width: 25%;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

const Included=styled.div`
width:100%;
height:40%;
  color: #abaeb3;
  font-size:0.8rem;
`;

const Price=styled.div`
width:100%;
height:60%;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;

const Dollars=styled.h2`

  color: #34bcf3;
  padding-bottom:1.35rem;
`;

const BookNow=styled.button`
width:100%;
height:1.7rem;
  border-radius: 0.5rem;
  background-color: #34bcf3;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #2aa1e0;
  }
`;
function TicketContainer() {
  return (
    <Box>
      <Ticket>
        <OneWay>One Way</OneWay>
        <Return>Return</Return>
      </Ticket>
      <Cost>
        <Included>Included: 1 <FaSuitcase /></Included>
        <Price>
            <Dollars>$110</Dollars>
            <BookNow>Book Now</BookNow>
        </Price>
      </Cost>
    </Box>
  );
}

export default TicketContainer;
