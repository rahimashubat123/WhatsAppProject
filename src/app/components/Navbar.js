
import React from 'react';
import { useState } from "react";
import { AppBar, Toolbar, Typography, Avatar, Box, theme, IconButton } from '@mui/material';

import ChatIcon from '@mui/icons-material/Chat';
import MenuIcon from '@mui/icons-material/Menu';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {auth,signOut} from '../Firebase/firebaseConfig'
import { useContext } from "react";
import { MyContext } from "../MyContext";
import { currentUserInfo } from '../Context/ContextApi';
import { useRouter } from 'next/router';
// import Group from './Group';




function Navbar() {
  const router=useRouter()
  const { clickGroup, clickSetting ,toggleMessage} = useContext(MyContext)
  const { user } = useContext(currentUserInfo)



  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const toggleBox = () => {
    setIsBoxVisible(prev => !prev); 
  };
  const logout = () => {

    // if(user){
    signOut(auth).then(() => {
      router.push('login')
    }).catch((error) => {
    });
  // }
  }

  return (


    <Toolbar style={{ minWidth: "100px" }}>
      <IconButton >
        <Avatar
          alt="Srikanth Polineni"
          src={user?.proImgLink}
        />
      </IconButton>





      <Box sx={{ flexGrow: 1 }} />
      <Box>
        <IconButton>
          <GroupAddIcon />

        </IconButton>

        <IconButton>

          < DataUsageIcon />
        </IconButton>
 

        <IconButton onClick={toggleMessage} > 
          <ChatIcon />
        </IconButton>
       

      </Box>
      <Box>
        <IconButton onClick={toggleBox}>
          <MoreVertIcon />
        </IconButton>
        {isBoxVisible && (
          <Box
            sx={{
              width: '200px',
              height: '300px',
              background: 'white',
              position: 'absolute',
              top: '50px',
              zIndex: 999,




            }}
          >
            <>
              <Box
                sx={{
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '25px', cursor: 'pointer',


                }}
              >


                <Typography onClick={clickGroup} >New group</Typography>
                <Typography>New community</Typography>
                <Typography>starred messages</Typography>
                <Typography onClick={clickSetting}>Settings</Typography>
                <Typography onClick={logout}>Log out</Typography>









              </Box>


            </>


          </Box>
        )}




      </Box>

      <Box>


      </Box>






    </Toolbar>


  );

}
export default Navbar;



