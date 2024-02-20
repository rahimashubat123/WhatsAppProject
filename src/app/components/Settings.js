

import React, { useContext, useState } from "react";
import { Box, Typography, Input, IconButton, Avatar, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';
import { Search, FilterList, ArrowBack } from '@mui/icons-material';
import { MyContext } from '../MyContext';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LockIcon from '@mui/icons-material/Lock';
import SecurityIcon from '@mui/icons-material/Security';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import DownloadIcon from '@mui/icons-material/Download';
import HelpIcon from '@mui/icons-material/Help';
import LogoutIcon from '@mui/icons-material/Logout';
import { Brightness6 as Brightness6Icon, Brightness7 as Brightness7Icon } from '@mui/icons-material';
import { currentUserInfo } from "../Context/ContextApi";
import ProfileSideBarBox from "./UserProfile";


function Settings() {

  const {user}=useState(currentUserInfo)
  const { toggleTheme, isDarkMode,clickSetting, clickprofile, click  } = useContext(MyContext);
  const [radioVisible, setRadioVisible] = useState(false);



  const handleImageChange = (e) => {
   if (e.target.files[0]){
    setImage(e.target.files[0]);
   }
  };



  const handleThemeClick = () => {
    setRadioVisible(!radioVisible); // Toggle radio buttons visibility
  };

  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    toggleTheme(selectedTheme); // Change the theme based on selection
  };

  const items = [
        { text: 'Notification', icon: <NotificationsIcon /> },
        { text: 'Privacy', icon: <LockIcon /> },
        { text: 'Security', icon: <SecurityIcon /> },
        { text: 'Theme', icon: isDarkMode ? <Brightness7Icon /> : <Brightness6Icon />, action: handleThemeClick },
        { text: 'Chat Wallpaper', icon: <WallpaperIcon /> },
        { text: 'Media Auto-Download', icon: <DownloadIcon /> },
        { text: 'Help', icon: <HelpIcon /> },
        { text: 'Log out', icon: <LogoutIcon /> },
        // Add more items as needed
      ];
     
       

  return (
        <>
         
          <Box
  sx={{
    width: '100%',
    minHeight: '108px',
    backgroundColor: '#008069',
    display: 'flex',
    alignItems: 'flex-end',
    color: 'white',
    justifyContent: 'flex-start', // Align items to the start of the container
    paddingLeft: '20px', // Add padding to adjust the position
    

    
  }}
>
  <ArrowBack onClick={clickSetting} sx={{ marginBottom: '30px' }} />
  <Typography sx={{ marginBottom: '30px', marginLeft: '10px' }}>Settings</Typography>
</Box>
    
          <Box
            sx={{
              backgroundColor: "white",
              padding: "10px 12px",
              display: "flex",
              // width: "100%",
              alignItems: "center",
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
                width: "100%",
                backgroundColor: "#E9E9E9",
                height: "42px",
                borderRadius: "6px",
                color: "black",
                padding: "0px 12px",
              }}
            />
          </Box>
    
          
    <ProfileSideBarBox/>
          {radioVisible && (
            <>
            
             <Box
             sx={{
              position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 999,
              
             }}
             >
            <Box
              sx={{
               
                width: '300px', 
                height: '200px', 
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
               
              }}
            >
              <RadioGroup
                value={isDarkMode ? 'dark' : 'light'}
                onChange={handleThemeChange}
              >
                <FormControlLabel
                  value="light"
                  control={<Radio />}
                  label="Light Theme"
                />
                <FormControlLabel
                  value="dark"
                  control={<Radio />}
                  label="Dark Theme"
                />
              </RadioGroup>
    
              <Button  sx={{ paddingTop:"50px",}} onClick={handleThemeClick} variant="text">cancel</Button>
              <Button  sx={{ paddingTop:"50px",}} onClick={handleThemeClick} variant="text">ok</Button>
            </Box>
            </Box>
           
            </>
          )}
         
          {/* </Box> */}
    
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                justifyContent: 'center',
                display: 'flex',
                width: '100%',
              }}
              onClick={item.action}
            >
              {item.icon && (
                <IconButton   sx={{ marginRight: '20px',marginBottom:'20px', }}>
                  {item.icon}
                </IconButton>
              )}
              <Typography
                variant="caption"
                sx={{
                  width: '70%',
                  borderBottom: '1px solid #e9edef',
                  paddingBottom: '4px',
                  marginBottom: '20px',
                  textAlign: 'left',
                  fontSize: '16px',
                }}
              >
                {item.text}
              </Typography>
            </Box>
          ))}
        </>
      );
    }
    
    export default Settings;













































