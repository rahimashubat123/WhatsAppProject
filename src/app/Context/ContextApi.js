'use client';
import { createContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  auth,
  db,
  doc,
  onSnapshot,
} from '../Firebase/firebaseConfig';


export const currentUserInfo = createContext();


const LoggedUser = ({ children }) => {

  const [chattingUser,setChattingUser]=useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log('User:', user);
      if (user) {
        const userDocRef = doc(db, 'users', user.uid);
        const unsubscribe = onSnapshot(
          userDocRef,
          (docSnapshot) => {
            if (docSnapshot.exists()) {
              const data = docSnapshot.data();
              console.log(data)
              setUser(data);
            } else {
              console.log('Document does not exist');
              setUser(null);
            }
          },
          (error) => {
            console.error('Error fetching document:', error);
          }
        );
        return () => {
          unsubscribe();
        };
      } else {
        // console.log('Logged Out');
        setUser(null);
      }
    });
  }, []);
 console.log(chattingUser)
  return (
    <currentUserInfo.Provider value={{ user, setUser ,chattingUser,setChattingUser}}>
      {children}
    </currentUserInfo.Provider>
  );
};
export default LoggedUser;