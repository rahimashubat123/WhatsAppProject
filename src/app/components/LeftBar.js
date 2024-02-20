
import { useState, useEffect, useContext } from 'react';
import { Box, Input, IconButton ,Button} from '@mui/material';
import MoodIcon from '@mui/icons-material/Mood';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import {
  collection,
  db,
  auth,
  addDoc,
  serverTimestamp,
  query,
  where,
  orderBy,
  onSnapshot
} from '../Firebase/firebaseConfig';
import { currentUserInfo } from '../Context/ContextApi';

function LeftBar() {
  
  const {user,chattingUser}=useContext(currentUserInfo)
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);
 
  const senderId = user ? `${user.userId}` : '';
const receiverId = chattingUser ? `${chattingUser.userId}` : '';


  const messagesRef = collection(db, 'chats');

 


  useEffect(() => {
    if (user && chattingUser && user.userId && chattingUser.userId) {
      const filteredMessagesQuery = query(
        messagesRef,
        where('senderId', 'in', [user.userId, chattingUser.userId]),
        where('receiverId', 'in', [user.userId, chattingUser.userId]),
      );
  
      const unsubscribe = onSnapshot(filteredMessagesQuery, (querySnapshot) => {
        const receivedMessages = [];
        querySnapshot.forEach((doc) => {
          receivedMessages.push({ id: doc.id, ...doc.data() });
        });
        setMessages(receivedMessages);
      });
  
      return () => {
        unsubscribe();
      };
    }
  }, [user, chattingUser, messagesRef]);

  const addMessage = async (newMessage) => {
    await addDoc(messagesRef, newMessage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageContent = inputMessage.trim();
    if (messageContent !== '') {
      const newMessage = {
        messageText: messageContent,
        senderId: user.userId,
        receiverId: chattingUser.userId,
        date: serverTimestamp(),
      };
      addMessage(newMessage);
      setInputMessage(''); 
    }
  };

  return (

    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        backgroundImage: `url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
      




       
      }}
    >
      <Box
        mt={5}
        px={5}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '2rem',
          width: '100%',
        }}
      >
       
     {messages.map((msg, i) => (
          <Box
          key={i}
                    display="flex"
                    justifyContent={msg.senderId === senderId ? 'flex-end' : 'flex-start'}
          >
            <Box
              sx={{
                background: msg.senderId === senderId ? '#4ada80' : 'white',
              borderRadius: msg.senderId === senderId ? '16px 4px 16px 16px' : '4px 16px 16px 16px',
              width: 'fit-content',
              maxWidth: '70%',
              padding: '5px 15px',
              }}
            >
              <p>{msg.messageText}</p>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Input form with styling */}
       <form onSubmit={handleSubmit} style={{ position: 'fixed', bottom: '10px', width: '100%' }}>
        <Box
        width="69%"
          height="60px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            background: '',
            marginTop: '10px',
            backgroundColor:'#E9E9E9',
            // margin: '10px',
            // justifyContent: "center",
            
          }}
        >
          <IconButton sx={{ background: '', height: '25px', width: '25px' }}>
            <MoodIcon />
          </IconButton>

          <IconButton sx={{ background: '', height: '25px', width: '25px' }}>
            <AttachFileIcon
              sx={{
                color: '',
                height: '25px',
                width: '25px',
              }}
            />
          </IconButton>

          <div style={{ width:'100%',justifyContent:"center" }}>
            <Input
              fullWidth
              disableUnderline
              placeholder="Type a message"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              sx={{

                // width:"100%",
                background: 'white',
                height: '45px',
                borderRadius: '6px',
                color: 'black',
                padding: '0px 10px',
                maxWidth: '100%',
                
              }}
            />
          </div>

         
          <Box>
            <Button>Submit</Button>
          </Box>
  
          <IconButton >
            <MicIcon />
          </IconButton>

          
         

        </Box>
      </form>
    </Box>
  );
} 
 

export default LeftBar;






