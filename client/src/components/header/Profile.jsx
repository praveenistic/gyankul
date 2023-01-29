
import { Box, Menu, MenuItem, Typography, styled } from "@mui/material"

import { useState } from "react";

import PowerIcon from '@mui/icons-material/PowerSettingsNew'


const SMenu = styled(Menu)`
margin-top:5px;
`

const Logout = styled(Typography)`
font-size:14px;
margin-left:10px
`

const Profile = ({account, setAccount}) =>{

    const [open, setOpen] = useState(false);
    
    const handleClick = (event) =>{
        setOpen(event.currentTarget)
    }


    const handleClose = () =>{
        setOpen(false)
    }



const logoutUser = () => {
    setAccount('');
}
 

    return (
        <>
        <Box onClick={handleClick}>
            <Typography style={{marginTop:2, cursor:"pointer"}}>{account}</Typography>

        </Box>

        <SMenu 
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}

        >
<MenuItem onClick={()=> {handleClose(); logoutUser();}}>
<PowerIcon color="Darkblue" fontSize="small"/>
    <Logout>Logout</Logout>
</MenuItem>

        </SMenu>
        </>
    )
}

export default Profile;