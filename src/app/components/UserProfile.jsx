import { Avatar, Box, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  setDoc,
  doc,
  db,
} from '../Firebase/firebaseConfig';
import { currentUserInfo } from '../Context/ContextApi';

const ProfileSideBarBox = () => {

    const {user}=useContext(currentUserInfo)
  const [profileImg, setProfileImg] = useState(null);
  const handleChange = async (e) => {
    const userImage = e.target.files[0];
    if (userImage && user) {
      const imageUrl = URL.createObjectURL(userImage);
      setProfileImg(imageUrl);
      // Create a storage reference
      const storageRef = ref(
        storage,
        `profile_images/${user.userId}_${userImage.name}`
      );
      await uploadBytes(storageRef, userImage);
      // Get the download URL of the uploaded image
      const downloadUrl = await getDownloadURL(storageRef);
      // Update user document with the image URL
      const userDocRef = doc(db, 'users', user.userId); // Replace 'YOUR_COLLECTION' with your actual collection name
      await setDoc(userDocRef, { proImgLink: downloadUrl }, { merge: true });
      // console.log(
      //   'Image uploaded to Firebase Storage and user document:',
      //   downloadUrl
      // );
    }
  };
  return (
    <Box
      sx={{
        bgcolor: '#fff',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
          bgcolor: '#F0F2F6',
        },
      }}
    >
      <Box sx={{ padding: '8px 20px' }}>
        <label
          htmlFor='avatar-input'
          sx={{ width: 80, height: 80, bgcolor: 'red', cursor: 'pointer' }}
        >
          <Avatar
            src={user?.proImgLink}
            alt='userProImg'
            sx={{ width: 56, height: 56 }}
          />
          <input
            id='avatar-input'
            type='file'
            accept='image/*'
            onChange={handleChange}
            style={{ display: 'none' }}
          />
        </label>
      </Box>
      <Box sx={{ flexGrow: '1' }}>
        <Typography variant='h6' sx={{ color: '#111B21', fontSize: '16px' }}>
            {user?.name}
        </Typography>
        <Typography variant='span' sx={{ color: '#54656F', fontSize: '12px' }}>
          Bio: Tell Something About Yourself
        </Typography>
      </Box>
    </Box>
  );
};
export default ProfileSideBarBox;