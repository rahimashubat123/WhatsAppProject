 









import React, { createContext, useState, useEffect } from 'react';
import { db } from '../Firebase/firebaseConfig'; 

export const NavigationContext = createContext();

 const UsersName = ({ children }) => {
  const [showChat, setShowChat] = useState(false);
  const [selectedUserData, setSelectedUserData] = useState([]);
  const [chatData, setChatData] = useState([]);

  const UsersName = () => {
    setShowChat(true);
  };

  const fetchChatData = async () => {
    try {
      if (selectedUserData) {
        const chatRef = db.collection('chats').doc(selectedUserData.id); // Replace 'chats' with your chat collection
        const snapshot = await chatRef.get();

        if (snapshot.exists()) {
          const data = snapshot.data().messages; // Assuming 'messages' holds chat messages
          setChatData(data);
        }
      }
    } catch (error) {
      // console.error('Error fetching chat data:', error);
    }
  };

  useEffect(() => {
    fetchChatData();
  }, [selectedUserData]); // Fetch chat data whenever selectedUserData changes
// console.log(selectedUserData,"hey")
  const contextValue = {
    showChat,
    selectedUserData,
    
    setSelectedUserData,
    chatData,
  };

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  );
};


export default UsersName;








// import React, { createContext, useState, useEffect, useReducer } from 'react';
// import { db } from '../Firebase/firebaseConfig'; 
// import {currentUserInfo} from "../Context/ContextApi"


// export const NavigationContext = createContext();

//  const UsersName = ({ children }) => {
//   const INITIAL_STATE ={
//     chatId:"null",
//     user:{},
//   };

//   // const chatReducer =(state, action) =>{
//   //   switch(action.type){
//   //     case 'CHANGE_USER':
//   //     return{
//   //       user:action.payload,
//   //       chatId:
//   //       currentUserInfo.uid>user.uid
//   //      ?currentUser.uid + user.uid
//   //      : action.payload.uid + currentUser.uid,
//   //     };
//   //     default:
//   //       return state;

//   //   }
//   // };

//   const chatReducer = (state, action) => {
//     switch (action.type) {
//       case 'CHANGE_USER':
//         return {
//           user: action.payload,
//           chatId:
//             currentUserInfo.uid > state.user.uid // Access user from state
//               ? currentUser.uid + state.user.uid // Access user from state
//               : action.payload.uid + currentUser.uid,
//         };
//       default:
//         return state;
//     }
//   };
//   const [state,dispatch]= useReducer(chatReducer,INITIAL_STATE);
  

//   return (
//     <NavigationContext.Provider value={{data:state, dispatch}}>
//       {children}
//     </NavigationContext.Provider>
//   );
// };


// export default UsersName;










