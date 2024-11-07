import styled from 'styled-components';
import { FaChevronDown } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Hide = styled.div`
  @media (max-width: 480px) {
  display:none;
  }
`;
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

const Details=styled.button`
width:15%;
height:100%;
background-color:#f0f6f9;
margin-left:0.5rem;
border-radius:0.5rem;
border:none;
color:#002056;
`;


const PassengerDiv=styled.button`
width:20%;
height:100%;
background-color:#f0f6f9;
margin-left:0.5rem;
border-radius:0.5rem;
border:none;
color:#002056;
`;

const DetailsP=styled.div`
width:100%;
height:10%;
margin-top:5%;
display:flex;
`;

const DetailsDiv=styled.div`
width:100%;
height:30%;
margin-top:0.5rem;
display:flex;
`;

const Search=styled.button`
width:8%;
height:100%;
border-radius:0.5rem;
border:none;
background-color:#34bcf3;
color:white;
margin-left:0.5rem;
`;

function SearchContainer(){
    return(
<Hide>
    <Traveltype>
      <Return>Return</Return>
      <Oneway>One way</Oneway>
    </Traveltype>
    <Searchbar>
      <DetailsP>
      <p style={{ marginLeft: '3rem',color:'#747779'}}>From</p>
      <p style={{ marginLeft: '9rem',color:'#747779'}}>To</p>
      <p style={{ marginLeft: '9rem',color:'#747779'}}>Depart</p>
      <p style={{ marginLeft: '19rem',color:'#747779'}}>Passengers and class</p>
      </DetailsP>
      <DetailsDiv>
        <Details style={{ marginLeft: '3rem'}}>Gdansk(GDN)</Details>
        <Details>Poznan(POZ)</Details>
        <Details>Wed, Oct 18<SlCalender size={12} style={{ color:'#34bcf3',marginLeft: '2rem' }}/></Details>
        <Details style={{ color:'#8c9092'}}>Return</Details>
        <PassengerDiv>1 Passenger, Economy <FaChevronDown  size={11} style={{ marginLeft: '2rem' }}/></PassengerDiv>
        <Search>Search</Search>
      </DetailsDiv>
    </Searchbar>
</Hide>
    );
}

export default SearchContainer;