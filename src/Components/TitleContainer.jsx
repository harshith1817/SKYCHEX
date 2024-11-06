import React from 'react';
import { MdFlightTakeoff } from "react-icons/md";
import styled from 'styled-components';

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 8px;
`;

function TitleContainer(){
    return(
    <Title>
        <MdFlightTakeoff style={{ marginRight: '0.5rem' }} />
        SKYCHEX
    </Title>

    );
}

export default TitleContainer;