"use client"
import React from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import { signInWithEmailAndPassword, auth } from '../Firebase/firebaseConfig';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/dist/client/router';

import { useState } from 'react';
import Link from 'next/link'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInError, setSignInError] = useState('');
  const router = useRouter();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // console.log('Authenticated');
      router.push('/');
    } catch (error) {
      alert(error);
    }
  };


  return (
    <Container
      sx={{
        backgroundColor: '#EAE6DF',
        padding: '30px',
        width: '400px',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '16px',
        marginTop: '16px',
      }}
    >
      <Typography
        variant='h4'
        gutterBottom
        style={{ color: '#333', margin: 'auto' }}
      >
        Sign In
      </Typography>
      <TextField
        label='Email'
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin='normal'
        variant='outlined'
        style={{ marginBottom: '16px' }}
      />
      <TextField
        label='Password'
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin='normal'
        variant='outlined'
        style={{ marginBottom: '16px' }}
      />
      {signInError && (
        <Typography
          variant='body2'
          color='error'
          style={{ marginBottom: '16px' }}
        >
          {signInError}
        </Typography>
      )}
      <Button
        variant='outlined'
        onClick={handleSignin}
        sx={{
          bgcolor: '#1976D2',
          color: '#fff',
          fontSize: '18px',
          '&:hover': {
            bgcolor: '#005596',
            color: '##fff',
            fontWeight: 'bold',
          },
        }}
      >
        Sign In
      </Button>
      <Box>
        <Typography variant='h6'> Already have an account?</Typography>
        <Link href={'/logon'}>
          <Button variant='contained' color='primary' fullWidth>
            signup
          </Button>
        </Link>
      </Box>
    </Container>
  );
};
export default SignIn;