import React from "react";
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage(){
    return(
    <div className= 'searchPage'>
      <div className='searchPage__info'>
        <p></p>
        <h1>Hotels Nearby</h1>
        <Button variant ="outlined">Cancel</Button>
        <Button variant ="outlined">Hotel</Button>
        <Button variant ="outlined">Room Types</Button>
        <Button variant ="outlined">Price</Button>
        <Button variant ="outlined">Filters</Button>
      </div>
      <div>
        <SearchResult 

        
        />
      </div>

    </div>
    )
}
export default SearchPage