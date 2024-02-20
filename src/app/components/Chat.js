

import React, { useState, useContext, useEffect } from 'react';
import { Paper, List, ListItem, Avatar, Box, Typography } from '@mui/material';
import { MyContext } from "../MyContext";
import { Scrollbar } from '@mui/material';
import { NavigationContext } from '../Context/UsersName';
import { currentUserInfo } from '../Context/ContextApi';
import{db,collection,onSnapshot,query,} from '../Firebase/firebaseConfig'
import Mainheader from './Mainheader';

function Chat() {
  const { toggleClick } = useContext(MyContext);
  
  const [chatUsers, setChatUsers] = useState([]);
  const {user} =useContext(currentUserInfo)
  const {setChattingUser}=useContext(currentUserInfo)
  // const { dispatch}= useContext(NavigationContext)


const getUserContactedCollection=()=>{
if(user){
 const userAddedsRef = query(collection(db, 'users',user?.userId,'contactedUsers',));
 onSnapshot(userAddedsRef,(query)=>{
  const AddedUser=[];
  query.forEach((doc)=>{
    AddedUser.push({...doc.data(),id:doc.id});
    setChatUsers(AddedUser)
  });
 })
}

}
useEffect(()=>{
  getUserContactedCollection()
},[user])
const addChattingUser=(currentChatUser)=>{
  setChattingUser(currentChatUser)
  toggleClick()           
}


// const handleSelect =(u)=>{
//   dispatch({type:"CHANGE_USER", payload: u})

// }



  return (
    <Paper>
        {chatUsers.map((chatUser, index) => (
          <ListItem
            key={index}
            onClick={() => {
              addChattingUser(chatUser);
              // handleSelect(chatUser.userInfo); // Modify 'chatUser.userInfo' to the correct property if needed
            }}
            
            sx={{
              display: "flex",
              alignItems: "center",
              borderBottom: '1px solid #E9E9E9',
              marginTop: index === 0 ? '10px' : 0,
              // height:"100px"
            
             
            }}
          >
            <Avatar src={chatUser.proImgLink}></Avatar>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                pl: "12px",
                width: "100%",
               
               

              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Typography variant="body1" color="black">
                  {chatUser.name}
                </Typography>
                <Typography variant="caption" color="black">
                  {chatUser.bio}
                </Typography>
              </Box>
              <Typography variant="caption" color="black">
                {chatUser.number}
              </Typography>
            </Box>
          </ListItem>

        ))}
    

      
    </Paper>
  );
}

export default Chat;

