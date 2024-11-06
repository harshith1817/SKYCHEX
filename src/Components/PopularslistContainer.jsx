import React from 'react';
import PopularsConatiner from './PopularsContainer';

function PopularslistContainer(){
    return(
        <>
        <PopularsConatiner city="Paris" country="France" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/paris.jpg"/>
        <PopularsConatiner city="Rome" country="Italy" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/rome.jpg"/>
        <PopularsConatiner city="Lisbon" country="Portugal" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/lisbon.jpg"/>
        <PopularsConatiner city="Amsterdam" country="Netherlands" image="https://raw.githubusercontent.com/harshith1817/SKYCHEX/refs/heads/main/src/assets/amsterdam.jpg"/>
        </>
    );
}

export default PopularslistContainer;