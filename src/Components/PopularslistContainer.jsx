import React from 'react';
import styled from 'styled-components';
import PopularsContainer from './PopularsContainer';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr)); /* Adjusts columns based on screen size */
  gap: 1rem;
  padding: 1rem;
  width: 80%;
  justify-items: center; /* Centers items horizontally */
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr)); /* Smaller columns for tablet */
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr)); /* Even smaller columns for mobile */
  }
`;

function PopularslistContainer() {
  return (
    <GridContainer>
      <PopularsContainer city="Paris" country="France" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/paris.jpg" />
      <PopularsContainer city="Rome" country="Italy" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/rome.jpg" />
      <PopularsContainer city="Lisbon" country="Portugal" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/lisbon.jpg" />
      <PopularsContainer city="Amsterdam" country="Netherlands" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/amsterdam.jpg" />
    </GridContainer>
  );
}

export default PopularslistContainer;
