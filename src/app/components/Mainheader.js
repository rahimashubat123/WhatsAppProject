import React,{useState,useEffect,useContext} from 'react';
import { AppBar, Toolbar,  Typography ,Avatar,Box,theme,IconButton } from '@mui/material';

import ChatIcon from '@mui/icons-material/Chat';
import MenuIcon from '@mui/icons-material/Menu'; // Import the MenuIcon separately from icons-material
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import { MyContext } from "../MyContext";
import { currentUserInfo } from '../Context/ContextApi';
import{db,collection,onSnapshot,query,} from '../Firebase/firebaseConfig'

function Mainheader() {
  
const {chattingUser}=useContext(currentUserInfo)




    return (
        <AppBar
        elevation={0}
        position="static"
        color="default"
        sx={{
          backgroundColor: "#ededed",
          borderRight: "5px solid gainsboro",
          borderRightWidth: "thin",
        }}
      >
        <Toolbar style={{ minWidth: "100px" }}>
          <IconButton >
             <Avatar src={chattingUser?.proImgLink}></Avatar>
          </IconButton>
    
          
          <Typography variant="body1" color="black">
          {chattingUser?.name}

                </Typography>
           
    
          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton>
            <GroupAddIcon />
            </IconButton>
            <IconButton>
           < DataUsageIcon/>
         </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
    
        </Toolbar>
      </AppBar>

      
   

    )
}




  export default Mainheader;







