import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseInit";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  onSnapshot,
  Timestamp ,
  serverTimestamp ,
  where, query,getDocs,orderBy,
} from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,signOut
} from "firebase/auth";

import { getStorage, ref,
  uploadBytes,
  getDownloadURL, } from "firebase/storage";
  import { getDatabase } from 'firebase/database';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage=getStorage(app);
const database = getDatabase(app);
export {
  auth,
  db,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  collection,
  addDoc,
  onAuthStateChanged,
  doc,
  setDoc,
  onSnapshot,ref,uploadBytes,
  storage,
  getDownloadURL,
  signOut,
  Timestamp ,
  serverTimestamp ,
  database,
  where, query,getDocs,orderBy,
};
