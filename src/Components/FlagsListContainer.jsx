import React from 'react';
import styled from 'styled-components';
import FlagsContainer from './FlagsContainer';

const FlagsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem;
    flex-direction: column;
    align-items: center;
  }
`;

function FlagslistContainer() {
  return (
    <FlagsGrid>
      <FlagsContainer Countryname="France" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/Flags/France.png"/>
      <FlagsContainer Countryname="Sweden" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/Flags/France.png"/>
      <FlagsContainer Countryname="Hungary" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/Flags/Hungary.png"/>
      <FlagsContainer Countryname="Italy" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/Flags/Italy.png"/>
      <FlagsContainer Countryname="Denmark" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/Flags/Denmark.png"/>
      <FlagsContainer Countryname="Finland" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/Flags/Finland.png"/>
      <FlagsContainer Countryname="Germany" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/Flags/Germany.png"/>
      <FlagsContainer Countryname="Latvia" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/Flags/Latvia.png"/>
      <FlagsContainer Countryname="Czechia" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/Flags/Czechia.png"/>
      <FlagsContainer Countryname="Poland" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/Flags/Poland.png"/>
      <FlagsContainer Countryname="Croatia" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/Flags/Croatia.png"/>
      <FlagsContainer Countryname="Japan" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/Flags/Japan.png"/>
      <FlagsContainer Countryname="India" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/Flags/India.png"/>
      <FlagsContainer Countryname="Georgia" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/Flags/Georgia.png"/>
      <FlagsContainer Countryname="Luxembourg" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/Flags/Luxembourg.png"/>
    </FlagsGrid>
  );
}

export default FlagslistContainer;
