import React from 'react';
import styled from 'styled-components';
import PopularslistContainer from './PopularslistContainer';
import FlagslistContainer from './FlagsListContainer';

const Deals = styled.div`
  width: 100%;
  background-color: #f3f8fb;
  padding-bottom: 4rem;
`;

const Popular = styled.h1`
  color: #334c77;
  padding-top: 6rem;
  display: flex;
  align-items: center;       /* Centers text vertically */
  justify-content: center;    /* Centers text horizontally */
  font-weight: bold;
  font-size: 2rem;

  @media (max-width: 768px) {
    padding-top: 4rem;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    padding-top: 3rem;
    font-size: 1.2rem;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  padding-top: 2rem;
  gap: 3rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    padding-top: 1rem;
    gap: 1.5rem;
  }
`;

const GreatDeals = styled.h1`
  color: #334c77;
  padding-top: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-top: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding-top: 1.5rem;
  }
`;

const Planetickets = styled.div`
  width: 70%;
  height: auto;
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 15%;

  @media (max-width: 1024px) {
    width: 90%;
    padding-left: 5%;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 0;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

function DealsContainer() {
  return (
    <Deals>
      <Popular>Popular right now</Popular>
      <BoxContainer>
        <PopularslistContainer />
      </BoxContainer>
      <GreatDeals>Great deals on plane tickets</GreatDeals>
      <Planetickets>
        <FlagslistContainer />
      </Planetickets>
    </Deals>
  );
}

export default DealsContainer;
