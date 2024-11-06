import React from 'react';
import styled from 'styled-components';

const Promo = styled.div`
  width: 100%;
  height: 15rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeadBox = styled.div`
  width: 50%;
  text-align: center;
  color: #334c77;
`;

const Head = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const Bottom = styled.h2`
  margin: 0.5rem 0 1.5rem 0;
  font-size: 1.5rem;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
`;

const Search = styled.input`
  height: 2rem;
  width: 13rem;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  border: 1px solid #ccc;
`;

const SignMeUp = styled.button`
  height: 2rem;
  width: 6rem;
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

function PromotionContainer() {
  return (
    <Promo>
      <HeadBox>
        <Head>Want to receive exclusive discounts and updates</Head>
        <Bottom>straight to your inbox?</Bottom>
      </HeadBox>
      <SearchBarContainer>
        <Search placeholder="Your Email" />
        <SignMeUp>Sign Me Up</SignMeUp>
      </SearchBarContainer>
    </Promo>
  );
}

export default PromotionContainer;
