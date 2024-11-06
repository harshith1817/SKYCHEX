import React from 'react';
import styled from 'styled-components';
import { FaChevronDown } from "react-icons/fa";
import { GrSort } from "react-icons/gr";
import TicketContainer from './TicketContainer';



const SearchResultBox = styled.div`
  width: 100%;
  height: 53rem;
  background-color: #f3f8fb;
  display: flex;
  justify-content: center; /* Centers the SearchResult horizontally */
  align-items: center;
`;

const SearchResult = styled.div`
  width: 70%;
  height: 36rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top:-10%;
`;

const SortBox = styled.div`
  width: 75%;
  height: 2rem;
  display: flex;
  justify-content: center; /* Centers PriceBar, Empty, and Sort horizontally */
  align-items: center;
  gap: 1rem; /* Adds spacing between elements */
`;

const SheduleBox = styled.div`
  width: 75%;
  margin-top: 1rem; /* Optional spacing from SortBox */
`;

const PriceBar = styled.div`
  width: 25%;
  height: 2rem;
  display:flex;
`;

const Empty = styled.div`
  width: 55%;
  height: 2rem;
  background-color: transparent;
`;

const Sort = styled.div`
  width: 15%;
  height: 2rem;
`;

const Cheapest=styled.button`
width: 40%;
height: 2rem;
background-color:white;
border-radius:0.35rem;
margin-right:0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-weight:bold;
  color: #334c77;
  cursor: pointer;
  border:none;
`;

const Fastest=styled.button`
  width: 40%;
  height: 2rem;
background-color:white;
border-radius:0.35rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-weight:bold;
  color: #abaeb3;
  cursor: pointer;
  border:none;
`;

const Symbol=styled.button`
  width: 25%;
  height: 2rem;
background-color:white;
border-radius:0.35rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-weight:bold;
  color: #334c77;
  cursor: pointer;
  border:none;
  margin-right:0.3rem;
`;

const Stop=styled.button`
  width: 70%;
  height: 2rem;
background-color:white;
border-radius:0.35rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-weight:bold;
  color: #334c77;
  cursor: pointer;
  border:none;
`;

function SearchResultContainer() {
  return (
    <SearchResultBox>
      <SearchResult>
        <SortBox>
          <PriceBar>
            <Cheapest>Cheapest</Cheapest>
            <Fastest>Fastest</Fastest>
          </PriceBar>
          <Empty />
            <Sort >
                <Symbol><GrSort size={14}/></Symbol>
                <Stop>Stops <FaChevronDown  size={11} style={{ marginLeft: '1rem' }}/></Stop>
            </Sort>
        </SortBox>
        <SheduleBox>
            <TicketContainer/>
            <TicketContainer/>
            <TicketContainer/>
            <TicketContainer/>
        </SheduleBox>
      </SearchResult>
    </SearchResultBox>
  );
}

export default SearchResultContainer;
