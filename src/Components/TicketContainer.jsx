import React from 'react';
import styled from 'styled-components';
import { FaSuitcase } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { LuDot } from "react-icons/lu";
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

const Day=styled.div`
height:20%;
width:100%;
display:flex;
`;

const Time=styled.div`
height:80%;
width:500%;
`;

const In=styled.div`
height:100%;
width:85%;
  color: #abaeb3;
  font-size:0.8rem;
`;

const Star=styled.div`
height:100%;
width:15%;
  color: #abaeb3;
  font-size:0.8rem;
`;

const SourceDiv=styled.div`
height:33%;
width:100%;
display:flex;
padding-top:0.5rem;
`;

const TimeDiv=styled.div`
height:33%;
width:100%;
display:flex;
`;

const DestinationDiv=styled.div`
height:33%;
width:100%;
display:flex;
`;
function TicketContainer() {
  return (
    <Box>
      <Ticket>
        <OneWay>
          <Day>
            <In>Wed, Oct 18 <LuDot/> Outbound</In>
            <Star><CiStar size={20}/></Star>
          </Day>
          <Time>
            <SourceDiv>
            <h3 style={{ paddingRight: '1rem' ,color:'#002056'}} >21:50</h3>
            <p style={{ paddingRight: '1rem',fontSize:'0.9rem' }} >Gdansk Lech Walesa</p>
            <h4 style={{color:'#767e8d'}}>GDN</h4>
            </SourceDiv>
            <TimeDiv>
              <p style={{ fontSize:'0.8rem', paddingRight: '2rem' }}>1h 10m</p>
              <p style={{ fontSize: '0.8rem', color: '#34bcf3' }}>Direct</p>
            </TimeDiv>
            <DestinationDiv>
            <h3 style={{ paddingRight: '1rem',color:'#002056' }} >23:00</h3>
            <p style={{ paddingRight: '1rem',fontSize:'0.9rem' }} >Poznan - Lawica</p>
            <h4 style={{color:'#767e8d'}}>POZ</h4>
            </DestinationDiv>
          </Time>
        </OneWay>
        <Return>
        <Day>
            <In>Wed, Oct 20 <LuDot /> Inbound</In>
            <Star><CiStar size={20}/></Star>
          </Day>
          <Time>
            <SourceDiv>
            <h3 style={{ paddingRight: '1rem',color:'#002056'}} >21:50</h3>
            <p style={{ paddingRight: '1rem',fontSize:'0.9rem' }} >Poznan - Lawica</p>
            <h4 style={{color:'#767e8d'}}>POZ</h4>
            </SourceDiv>
            <TimeDiv>
              <p style={{ fontSize:'0.8rem', paddingRight: '2rem' }}>1h 10m</p>
              <p style={{ fontSize: '0.8rem', color: '#34bcf3' }}>Direct</p>
            </TimeDiv>
            <DestinationDiv>
            <h3 style={{ paddingRight: '1rem',color:'#002056' }} >23:00</h3>
            <p style={{ paddingRight: '1rem',fontSize:'0.9rem' }} >Gdansk Lech Walesa</p>
            <h4 style={{color:'#767e8d'}}>GDN</h4>
            </DestinationDiv>
          </Time>
        </Return>
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
