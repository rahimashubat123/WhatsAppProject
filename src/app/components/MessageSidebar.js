
// import React, { useState, useContext } from 'react';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { db } from '../Firebase/firebaseConfig';
// import { Box, Typography, Input, Avatar } from '@mui/material';
// import { MyContext } from '../MyContext';

// const MessageSidebar = () => {
//   const [username, setUsername] = useState('');
//   const [usersList, setUsersList] = useState([]);
//   const [err, setErr] = useState(false);
//   const { toggleMessage } = useContext(MyContext);

//   const handleSearch = async () => {
//     try {
//       const q = query(
//         collection(db, 'users'),
//         where('name', '==', username.trim())
//       );

//       const querySnapshot = await getDocs(q);
//       const newUsers = [];
//       querySnapshot.forEach((doc) => {
//         newUsers.push({ id: doc.id, ...doc.data() });
//       });

//       setUsersList(prevUsers => [...prevUsers, ...newUsers]);
//       setErr(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setErr(true);
//     }
//   };

//   const handlekey = (e) => {
//     if (e.code === 'Enter') {
//       handleSearch();
//     }
//   };

//   const handleBackClick = () => {
//     toggleMessage();
//   };

//   return (
//     <Box
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '410px',
//         height: '100vh',
//         background: 'white',
//       }}
//     >
//       <Box
//         sx={{
//           width: '96%',
//           minHeight: '108px',
//           backgroundColor: '#008069',
//           display: 'flex',
//           alignItems: 'flex-end',
//           color: 'white',
//           padding: '8px',
//         }}
//       >
//         <Typography variant="body1" onClick={handleBackClick}>
//           Back
//         </Typography>
//       </Box>

//       <Box
//         sx={{
//           backgroundColor: 'white',
//           padding: '10px 12px',
//           display: 'flex',
//           alignItems: 'center',
//         }}
//       >
//         <Input
//           fullWidth
//           disableUnderline
//           placeholder="Type a name"
//           onKeyDown={handlekey}
//           onChange={(e) => setUsername(e.target.value)}
//           sx={{
//             width: '100%',
//             backgroundColor: '#E9E9E9',
//             height: '42px',
//             borderRadius: '6px',
//             color: 'black',
//             padding: '0px 12px',
//           }}
//         />
//       </Box>

//       {err && (
//         <Typography variant="body2" color="error">
//           User not found
//         </Typography>
//       )}

// <Box>
// {usersList.map((user, index) => (
//     <Box
//       key={user.id}
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '10px',
//         padding: '8px', // Adjust padding to create space between user entries
//         backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white', // Alternate background colors for better readability
//       }}
//     >
//       <Avatar src={user.profileImageLink} alt="" />
//       <Typography variant="body1">{user.name}</Typography>
//       {/* Display user information */}
//     </Box>
//   ))}
// </Box>
//     </Box>
//   );
// };

// export default MessageSidebar;


















// import React, { useState, useContext } from 'react';
// import { collection, query, where, getDocs } from 'firebase/firestore';
// import { db } from '../Firebase/firebaseConfig';
// import { Box, Typography, Input, Avatar } from '@mui/material';
// import { MyContext } from '../MyContext';

// const MessageSidebar = () => {
//   const [username, setUsername] = useState('');
//   const [usersList, setUsersList] = useState([]);
//   const [err, setErr] = useState(false);
//   const { toggleMessage } = useContext(MyContext);

//   const handleSearch = async () => {
//     try {
//       if (username.trim().toLowerCase() === 'all') {
//         const allUsers = [];
//         const q = query(collection(db, 'users'));
//         const querySnapshot = await getDocs(q);

//         querySnapshot.forEach((doc) => {
//           allUsers.push({ id: doc.id, ...doc.data() });
//         });

//         setUsersList(allUsers);
//       } else {
//         const q = query(collection(db, 'users'), where('name', '==', username.trim()));

//         const querySnapshot = await getDocs(q);
//         const newUsers = [];

//         querySnapshot.forEach((doc) => {
//           newUsers.push({ id: doc.id, ...doc.data() });
//         });

//         setUsersList(prevUsers => [...prevUsers, ...newUsers]);
//       }

//       setErr(false);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setErr(true);
//     }
//   };

//   const handlekey = (e) => {
//     if (e.code === 'Enter') {
//       handleSearch();
//     }
//   };

//   const handleBackClick = () => {
//     toggleMessage();
//   };

//   return (
//     <Box
//       style={{
//         position: 'fixed',
//         top: 0,
//         left: 0,
//         width: '410px',
//         height: '100vh',
//         background: 'white',
//       }}
//     >
//       <Box
//         sx={{
//           width: '96%',
//           minHeight: '108px',
//           backgroundColor: '#008069',
//           display: 'flex',
//           alignItems: 'flex-end',
//           color: 'white',
//           padding: '8px',
//         }}
//       >
//         <Typography variant="body1" onClick={handleBackClick}>
//           Back
//         </Typography>
//       </Box>

//       <Box
//         sx={{
//           backgroundColor: 'white',
//           padding: '10px 12px',
//           display: 'flex',
//           alignItems: 'center',
//         }}
//       >
//         <Input
//           fullWidth
//           disableUnderline
//           placeholder="Type a name"
//           onKeyDown={handlekey}
//           onChange={(e) => setUsername(e.target.value)}
//           sx={{
//             width: '100%',
//             backgroundColor: '#E9E9E9',
//             height: '42px',
//             borderRadius: '6px',
//             color: 'black',
//             padding: '0px 12px',
//           }}
//         />
//       </Box>

//       {err && (
//         <Typography variant="body2" color="error">
//           User not found
//         </Typography>
//       )}

//       <Box>
//         {usersList.map((user) => (
//           <Box
//             key={user.id}
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: '10px',
//               padding: '8px',
//               backgroundColor: 'white',
//             }}
//           >
//             <Avatar src={user?.proImgLink} alt="" />
//             <Typography variant="body1">{user.name}</Typography>
//             {/* Display user information */}
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default MessageSidebar;















import React, { useState, useContext } from 'react';
import { collection, query, where, getDocs, } from 'firebase/firestore';
import { db, onAuthStateChanged, auth, setDoc, doc, } from '../Firebase/firebaseConfig';
import { Box, Typography, Input, Avatar } from '@mui/material';
import { MyContext } from '../MyContext';
import { UserContext } from '../Context/UsersName';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { NavigationContext } from '../Context/UsersName';

const MessageSidebar = () => {
  const [username, setUsername] = useState('');
  const [usersList, setUsersList] = useState([]);
  const [err, setErr] = useState(false);
  const { toggleMessage } = useContext(MyContext);

  // const { navigateToChat, setSelectedUserData } = useContext(NavigationContext);


  const handleSearch = async () => {
    try {
      if (username.trim().toLowerCase() === 'all') {
        const allUsers = [];
        const q = query(collection(db, 'users'));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          allUsers.push({ id: doc.id, ...doc.data() });
        });

        setUsersList(allUsers);
      } else {
        const q = query(collection(db, 'users'), where('name', '==', username.trim()));

        const querySnapshot = await getDocs(q);
        const newUsers = [];

        querySnapshot.forEach((doc) => {
          newUsers.push({ id: doc.id, ...doc.data() });
        });

        setUsersList(prevUsers => [...prevUsers, ...newUsers]);
      }

      setErr(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setErr(true);
    }
  };

  const handlekey = (e) => {
    if (e.code === 'Enter') {
      handleSearch();
      setUsersList([])
    }
  };

  const handleBackClick = () => {
    toggleMessage();
  };

  // const handleUserClick = (user) => {
  //   setSelectedUserData(user);
  //   // navigateToChat();
  // };
  const addedUser = (user) => {
    onAuthStateChanged(auth, (LoggedUser) => {
      if (LoggedUser)
        try {
          const subCollectionRef = doc(db, 'users', LoggedUser.uid, 'contactedUsers', user.id);
          setDoc(subCollectionRef, user)
        }
        catch (err) {
          console.log(err)

        }

    })

  }
  return (
    <Box
      style={{
        position: 'fixed',
        left: 0,
        width: '400px',
        height: '100vh',
        background: 'white',
      }}
    >
      <Box
        sx={{
          width: '100%',
          minHeight: '108px',
          backgroundColor: '#008069',
          display: 'flex',
          alignItems: 'flex-end',
          color: 'white',
          padding: '8px',
          gap:'10px',
        }}
      >
       
        <ArrowBackIcon onClick={handleBackClick} />
        <Typography variant="body1" >
          New Chat
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: 'white',
          padding: '10px 12px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Input
          fullWidth
          disableUnderline
          placeholder="Type a name"
          onKeyDown={handlekey}
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            width: '100%',
            backgroundColor: '#E9E9E9',
            height: '42px',
            borderRadius: '6px',
            color: 'black',
            padding: '0px 12px',
          }}
        />
      </Box>

      {err && (
        <Typography variant="body2" color="error">
          User not found
        </Typography>
      )}

      <Box sx={{overflowX:'auto'}}>
        {usersList.map((user) => (
          <Box
            onClick={() => addedUser(user)}
            key={user.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px',
              backgroundColor: 'white',
              cursor: 'pointer',
              '&:hover': { bgcolor: '#f0f2f5' }
            }}
          >
            <Avatar src={user?.proImgLink} alt="" />
            <Typography variant="body1">{user.name}</Typography>
            {/* Display user information */}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MessageSidebar;








