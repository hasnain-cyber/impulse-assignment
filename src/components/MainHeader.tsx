import {Box, Typography} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";

const MainHeader = () => {
    return (
        <Box display={'flex'} justifyContent={'space-between'} paddingX={4} paddingY={2} bgcolor={'white'}>
            <Typography fontFamily={'Poppins'} fontSize={30} color={'#23304C'}>Dashboard</Typography>

            {/*right-side of header*/}
            <Box display={'flex'} alignItems={'center'} gap={1}>
                <SearchIcon sx={{color: '#23304C'}}/>
                <AppsIcon sx={{color: '#23304C'}}/>
                <Box borderRadius={5} bgcolor={'#2B83EA'} display={'flex'} alignItems={"center"} gap={0.5}
                     paddingX={1}
                     paddingY={0.5} marginRight={4}>
                    <NotificationsIcon sx={{color: 'white'}}/>
                    <Typography fontFamily={'Poppins'} fontSize={10} fontWeight={600}
                                color={'white'}>15</Typography>
                </Box>
                <img src={'/assets/header-logo.svg'} alt={'lion-logo'} height={30}/>
                <Typography fontFamily={'Poppins'} fontSize={15} fontWeight={500}>Groww90</Typography>
            </Box>
        </Box>
    )
}

export default MainHeader