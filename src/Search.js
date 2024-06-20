import React,{useState}from "react";
import './Search.css';
import "react-date-range/dist/styles.css";//styles.css
import "react-date-range/dist/theme/default.css";//themes.css
import { DateRangePicker } from "react-date-range";
import People from "@material-ui/icons/People";
import { Button } from "@mui/material";
import {useHistory} from "react-router-dom";
//calendar
function Search(){
    const history=useHistory();
    const[startDate,setStartDate]=useState(new Date());
    const[endDate,setEndDate]=useState(new Date());

    const selectionRange ={
        startDate:startDate,
        endDate:endDate,
        key:"selection",
    };

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return(
     <div className='search'>
     <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
     <h2>
        No.Guests
        <People/>
     </h2>
     <input min={0}
        defaultValue={1}
        type="number"
     />
     <Button onClick={()=> history.push('/search')}>Search Hotel</Button>

     </div>
    )
}

export default Search