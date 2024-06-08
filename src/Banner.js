import React from 'react'; // Importing React to use JSX
import './Banner.css'; // Importing the CSS file for styling the Banner component

// Banner component definition
function Banner() {
    return (
        <div className='banner'> {/* Main container for the banner */}
            <h1>Banner</h1> {/* Header text for the banner */}
        </div>
    );
}

export default Banner; // Exporting the Banner component to be used in other parts of the application
