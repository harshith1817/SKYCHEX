import React from 'react';
import { FaHome } from "react-icons/fa";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Title = styled.button`
    width: 8rem; /* Increased width for better text fit */
    height: 2.5rem; /* Increased height for better usability */
    font-weight: bold;
    color: #fff; /* Changed text color to white for contrast */
    display: flex;
    align-items: center; /* Centers text and icon vertically */
    justify-content: center; /* Centers text and icon horizontally */
    position: absolute;
    top: 15%;
    left: 88%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background-color: #3f5780; /* Updated background color */
    padding: 0.5rem 1rem; /* Padding for better click area */
    border-radius: 10px; /* Slightly larger border radius for a modern look */
    border: none;
    cursor: pointer; /* Changes the cursor to pointer on hover */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
    transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transitions */

    &:hover {
        background-color: #2f4567; /* Darker shade on hover */  
        opacity:0.9;
    }

`;

function HomeButtonContainer() {
    const navigate = useNavigate(); // Create a navigate function

    const handleClick = () => {
        navigate('/'); // Navigate to the home page
    };

    return (
        <Title onClick={handleClick}> {/* Attach the click handler */}
            <FaHome  style={{ marginRight: '0.5rem' }}  />
            Home
        </Title>
    );
}

export default HomeButtonContainer;