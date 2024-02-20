import react from "react";
import { Grid, Avatar, Button, Typography, Box, Menu } from '@mui/material';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import RightBar from "./RightBar";
import Group from './Group';
import { useContext } from "react";
import { MyContext } from "../MyContext";
import Settings from "../components/Settings";
import MessgaeSidebar from "./MessageSidebar";




function Main() {
  const { chat, click, head, thurs, openMessage } = useContext(MyContext)
  // const {wed,thurs}= useContext(MyContext)
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row", width:'100vw' }}>
        {click && (
          <>
            <Box
              sx={{
                maxWidth: "400px",
                minWidth:'400px',
                background: "#E9E9E9",
                height: '100vh',

              }}
            >
              <Navbar />
              <Sidebar />
              <Box sx={{
                overflowY: "auto",
                overflowX: "hidden",
                "&::-webkit-scrollbar": {
                  width: "5px",
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "#FFFFFF"
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#8696a0;"
                }
              }}>

                <Chat />
              </Box>




            </Box>
          </>
        )}




        {head && (
          <Box sx={{ maxWidth: "400px",
          minWidth:'400px',
          background: "#E9E9E9",
          height: '100vh',}}>
            <Group />
          </Box>
        )}









        <>
          {thurs && (
            <Box
              sx={{
                maxWidth: "400px",
                minWidth:'400px',
                background: "#E9E9E9",
                height: '100vh',
                overflowY: "auto",
                overflowX: "hidden",
                "&::-webkit-scrollbar": {
                  width: "5px",
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "#FFFFFF",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "#8696a0",
                },
              }}
            >
              <Settings />
            </Box>
          )}
        </>

        {openMessage && (
          <MessgaeSidebar />
        )}



        <Box

          sx={{
            border: "  .05px solid #E9E9E9",
          }}

        />

        <Box
          flexGrow={1}
          sx={{
            background: "#E9E9E9",
          }}
        >
          <RightBar />
        </Box>
      </Box>
    </>

  )
}






export default Main;