'use client'

import {Avatar, Box,Typography,Button} from "@mui/material";


function Index(){


    return(
      
<>
<Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '20px',
      background: 'f0f0f0', 
      display: "flex", 
       height: '100vh',
      width:'100%'
     
    }}
  >



 {/* <Box
 sx={{
  
  paddingTop:'50px',
 }}
 > */}
    <img
      src="native-desktop-hero_a22b846aefcd2de817624e95873b2064.png"
      alt="WhatsApp"
      style={{ width: '300px', height: 'auto', borderRadius: '51px' ,}}
    />
    <Typography variant="h4" textAlign="center" color="#41525d">
      Download WhatsApp From The Window
    </Typography>
    <Typography variant="body1" textAlign="center" color="#667781">
      {/* Make calls, download the Windows app */}
      Make calls,share your screen and get a faster experience when you download the windows app.
    </Typography>
    <Box sx={{ textAlign: 'center' }}>
      <Button variant="contained" color="success">
        Get the App
      </Button>
    </Box>
{/* 
    </Box> */}

  
  
  


</Box>
</>
 

    )
}

export default Index;