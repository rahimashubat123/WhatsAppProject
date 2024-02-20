// 'use client'
// import Main from "./components/Main";
// import React   from "react";
// import { useState} from "react";
// import { MyContext } from "./MyContext";



// export default function Home() {
//   const[image,setImage]= useState(true);
//   const[chat,setChat]= useState(false);
//   const [click, setClick] = useState(true);
//   const [ head , setHead] = useState(false);
//   const [thurs, setThurs] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const[ open, setOpen] = useState(false)
  

//   const toggleClick=()=>{
//     setImage(!image);
//     setChat(!chat);
//   }

//   const clickGroup=()=>{
//     setClick(!click);
//     setHead(!head);

//   }

//   const clickSetting=()=>{
//     setClick(!click)
    
//     setThurs(!thurs);

//   }

//   const toggleTheme = () => {
//     setIsDarkMode((prevMode) => !prevMode); 
//   };

  
//   // const clickprofile =()=>{
 
//   //   setOpen(!open)


//   // }

//   return (
//     <>
//    <MyContext.Provider value={{image,chat,toggleClick,clickGroup,click,head,clickSetting,thurs,isDarkMode, toggleTheme,}}>

//    <Main/>
//    </MyContext.Provider>
   

  
   
  

//     </>
   
//   )
// }
