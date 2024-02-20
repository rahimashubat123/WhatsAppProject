
import react from "react";
import { useState } from 'react';
import { Grid, Avatar, Button, Typography, Box } from '@mui/material';
//  import Chatsearch from "./Chatsearch";
import LeftBar from "./LeftBar";
import Index from "./Index";
import Mainheader from "./Mainheader";

import { useContext } from "react";
import { MyContext } from "../MyContext";





function RightBar() {
  const { chat, image } = useContext(MyContext)



  return (
    <>
      {chat && (
        <>
          <Box
           
          
          >
            <Mainheader />
            <Box
             sx={{
           
              background: "#E9E9E9",
              height: '100vh',
              overflowY: "auto",
              overflowX: "hidden",
              "&::-webkit-scrollbar": {
                width: "5px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#FFFFFF",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#8696a0",
              },
            }}
            >
            <LeftBar />
            </Box>
          </Box>



        </>
      )} 

      {image && (
        <>
          <Box>
          <Index />
          </Box>
        </>
       )} 



    </>
















  )
}


export default RightBar;