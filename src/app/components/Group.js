

import React from 'react';
import { Box, Typography, TextField, Avatar } from '@mui/material';
import { useContext } from 'react';
import { MyContext } from '../MyContext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const Group = () => {
  const { head, clickGroup } = useContext(MyContext);

  // Sample array of members (Replace this with your actual array of members)
  const members = [
    { id: 1, name: 'Rahima' },
    { id: 2, name: 'karima' },
    { id: 2, name: 'ayesha' },
    { id: 2, name: 'aliyan' },
    { id: 2, name: 'bander' },
    { id: 2, name: 'karima' },

  
    // Add more members as needed
  ];

  const toggleClick = () => {
    // Define the functionality for toggleClick here
  };

  return (
    <Box sx={{
      maxWidth: '100%',
    }}>
      <Box
        style={{
          width: '100%',
          height: '120px',
          backgroundColor: '#008069',
          display: 'flex',
          // padding: '20px',
          color: 'white',
          gap: '15px',
          alignItems: 'center',
        }}
      >
        <ArrowBackIcon onClick={clickGroup} />
        <Typography variant="h6">Add Group Members</Typography>
      </Box>

     <Box
        sx={{
          display: 'flex',
          // justifyContent: 'center',
          alignItems: 'center',
          paddingBottom:'30px',
          paddingLeft:'30px',
         
        }}
      >
        <TextField
          label="Search name or number"
          variant="standard"
          InputProps={{
            style: {
              width: '160%',
              borderBottom: 'none',
              textAlign: 'center',
              padding: '12px',
            },
          }}
        />
      </Box>
      
      {members.map((member) => (
        <Box
        
          key={member.id}
          display="flex"
          onClick={toggleClick}
          sx={{
           


           
    
            background: 'white',
            padding: '12px',
            width: '100%',
            borderTop: '1px solid #E9E9E9',
            borderBottom: '1px solid #E9E9E9',
            gap: '30px',
          }}
        >
          <Avatar />
          <Box sx={{ display: 'flex', flexDirection: 'column', pl: '15px', width: '100%', gap: '20px' }}>
            <Box display="flex" justifyContent="space-between" width="100%">
              <Typography variant="body1" color="black">
                {member.name}
              </Typography>
              {/* Add other member information here */}
            </Box>
           
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Group;






