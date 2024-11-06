import React from 'react';
import styled from 'styled-components';
import PopularsConatiner from './Popularscontainer';

const Deals=styled.div`
width:100%;
background-color:#f3f8fb;
`;

const Popular=styled.h1`
padding-top:6rem;
display: flex;
align-items: center;       /* Centers text vertically */
justify-content: center;    /* Centers text horizontally */
font-weight:bold;
`;

const BoxContainer=styled.div`

`;

function DealsContainer(){
    return(
        <Deals>
              <Popular>Popular right now</Popular>
              <BoxContainer>
                <PopularsConatiner>
                    
                </PopularsConatiner>
              </BoxContainer>
        </Deals>
    );
}

export default DealsContainer;