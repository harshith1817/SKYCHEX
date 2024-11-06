import React from 'react';
import styled from 'styled-components';
import PopularslistContainer from './PopularslistContainer';
import FlagslistContainer from './FlagsListContainer';

const Deals=styled.div`
width:100%;
background-color:#f3f8fb;
padding-bottom:4rem;
`;

const Popular=styled.h1`
color:#334c77;
padding-top:6rem;
display: flex;
align-items: center;       /* Centers text vertically */
justify-content: center;    /* Centers text horizontally */
font-weight:bold;
`;

const BoxContainer=styled.div`
display:flex;
padding-top:2rem;
gap:3rem;
justify-content: center;
`;

const GreatDeals=styled.h1`
color:#334c77;
padding-top:3rem;
display: flex;
align-items: center;       /* Centers text vertically */
justify-content: center;    /* Centers text horizontally */
font-weight:bold;
`;

const Planetickets=styled.div`
width:70%;
height:15rem;
padding-top:2rem;
display: flex;
flex-direction: row;
justify-content: center;
flex-wrap: wrap;
align-items: center;
padding-left:15%;
`;

function DealsContainer(){
    return(
        <Deals>
              <Popular>Popular right now</Popular>
              <BoxContainer>
                <PopularslistContainer/>
              </BoxContainer>
              <GreatDeals>Great deals on plane tickets</GreatDeals>
              <Planetickets>
                <FlagslistContainer/>
              </Planetickets>
        </Deals>

    );
}

export default DealsContainer;