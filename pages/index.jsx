'use client'
import Main from "../src/app/components/Main";
import React   from "react";
import { useState} from "react";
import { MyContext } from "../src/app/MyContext";
import LoggedUser from "../src/app/Context/ContextApi";
import UsersNameProvider  from "../src/app/Context/UsersName";
// import { global } from "../src/app/styles/global";








export default function Home() {
  const[image,setImage]= useState(true);
  const[chat,setChat]= useState(false);
  const [click, setClick] = useState(true);
  const [ head , setHead] = useState(false);
  const [thurs, setThurs] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const[ open, setOpen] = useState(false)
  const [openMessage, setOpenMessage] = useState(false);
  

  const toggleClick=()=>{
    setImage(!image);
    setChat(!chat);
  }

  const clickGroup=()=>{
    setClick(!click);
    setHead(!head);

  }

  const clickSetting=()=>{
    setClick(!click);
    
    setThurs(!thurs);

  }

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode); 
  };

  
  

  const toggleMessage = () => {
   
    // setOpenMessage(prevState => !prevState);
    // setClick(!click);
    setOpenMessage(!openMessage);
  };

  return (
    <>
   <MyContext.Provider value={{image,chat,toggleClick,clickGroup,click,head,clickSetting,thurs,isDarkMode, toggleTheme,toggleMessage,openMessage}}>
   <LoggedUser>
<UsersNameProvider >
   <Main/>
   </UsersNameProvider>
   </LoggedUser>
   </MyContext.Provider>
  
    </>
   
  )
}
