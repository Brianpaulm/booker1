import React, { useState } from 'react'; // Importing React to use JSX
import './Banner.css'; // Importing the CSS file for styling the Banner component
import { Button } from '@mui/material';
import Search from './Search';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate from react-router-dom

// Banner component definition
function Banner() {
    const navigate = useNavigate(); // Using useNavigate instead of useHistory
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'> {/* Main container for the banner */}
            <div className='banner__search'>
                {showSearch && <Search />}
                <Button 
                    onClick={() => setShowSearch(!showSearch)}
                    className='banner__searchButton'
                    variant='outlined'>
                    {showSearch ? "Hide" : "Select Dates"}
                </Button>
            </div>
            <div className='banner__info'>
                <h1></h1>
                <h5></h5>
                <Button 
                    onClick={() => navigate('/search')} 
                    variant='outlined'>
                    Explore More
                </Button>
            </div>
        </div>
    );
}

export default Banner; // Exporting the Banner component to be used in other parts of the application
