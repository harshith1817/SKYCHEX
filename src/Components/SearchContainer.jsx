import styled from 'styled-components';

const Searchbar = styled.div`
  width: 70%;
  height: 10rem; // Adjusted height for better visibility
  background-color: white;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -65%);
  z-index: 1;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); // Optional: Adds a shadow for better visibility
`;

const Traveltype=styled.div`
width:20%;
height:3rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -255%);
  z-index: 2;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); // Optional: Adds a shadow for better visibility
  background-color: #f0f6f9;
`;

const Return=styled.div`
width:49%;
height:2.7rem;
  background-color: #34bcf3;
  display: flex;
  align-items: center;       /* Centers text vertically */
  justify-content: center;    /* Centers text horizontally */
  position: absolute;
  top: 5%; // Adjusted to fit within the Navbar
  left: 0.5%;
  z-index: 2;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); // Optional: Adds a shadow for better visibility
  color:white;
  align-items:center;
  font-size:1.2rem;
  flex-direction:column;
  font-weight:bold;
`;

const Oneway=styled.div`
width:50%;
height:3rem;
  display: flex;
  position: absolute;
  top: 0%; // Adjusted to fit within the Navbar
  left: 50%;
  z-index: 2;
  align-items: center;       /* Centers text vertically */
  justify-content: center;    /* Centers text horizontally */
  font-size:1.2rem;
  border-radius: 0.5rem;
  flex-direction:column;
  font-weight:bold;
`;

function SearchContainer(){
    return(
<>
    <Traveltype>
      <Return>Return</Return>
      <Oneway>One way</Oneway>
    </Traveltype>
    <Searchbar></Searchbar>
</>
    );
}

export default SearchContainer;