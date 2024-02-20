
import React from "react";
import { Avatar, List, ListItem, ListItemText, Paper, Input, Box } from '@mui/material';
import IconButton from '@mui/material/IconButton'; // Import IconButton from the correct path
import FilterListIcon from '@mui/icons-material/FilterList';
import { Search ,FilterList  } from '@mui/icons-material';
// import "./Sidebar.css";



 function Sidebar() {
 
  
    return (
  <Box
    sx={{
      backgroundColor: "white",
      padding: "10px 12px",
      display: "flex",
      alignItems:"center",
      

    }}
  >
    <Input
      fullWidth
      disableUnderline
      placeholder="type a message"
      startAdornment={
        <IconButton>
          <Search sx={{ color: "#8696a1", height: "20px", width: "20px" }} />
        </IconButton>
      }
      endAdornment={
        <IconButton>
          <FilterList sx={{ color: "#8696a1", height: "20px", width: "20px" }} />
        </IconButton>
      }
      sx={{
        backgroundColor: "#E9E9E9",
        borderRadius: "6px",
        color: "black",
        padding: "0px 12px",
      }}
    
        
      
    />
  </Box>
);
}

             
   
  export default Sidebar;


