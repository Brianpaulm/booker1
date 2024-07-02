import React from "react";
import './SearchPage.css';
import { Button } from "@mui/material";
import SearchResult from "./SearchResult";

function SearchPage(){
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p></p> {/* Placeholder for any additional info */}
                <h1>Hotels Nearby</h1>
                <Button variant="outlined">Cancel</Button>
                <Button variant="outlined">Hotel</Button>
                <Button variant="outlined">Room Types</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Filters</Button>
            </div>
            <div>
                {/* Example of passing props to SearchResult */}
                <SearchResult
                    img="https://via.placeholder.com/300"
                    location="Example Location"
                    title="Example Title"
                    description="Example Description"
                    star={4.5}
                    price="$100"
                    total="$200 total"
                />
            </div>
        </div>
    );
}

export default SearchPage;
