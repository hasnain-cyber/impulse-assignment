import './App.scss'

import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import {Box, Drawer, List, ListItem, Typography} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import PeopleIcon from '@mui/icons-material/People';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import Transactions from "../pages/Transactions/Transactions";

function App() {
    const [openDrawer, setOpenDrawer] = useState(true);

    return (
        <>
            {/*side drawer*/}
            <Drawer
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: "100vw",
                        maxWidth: 300,
                        bgcolor: '#23304C',
                        paddingY: 4,
                        paddingX: 1,
                        flexShrink: 0,
                    },
                }}
                variant="permanent"
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Typography fontSize={40} textAlign={"center"} color={"white"}
                            fontFamily={'Oswald'} paddingBottom={5}>Subspace.</Typography>
                <Box display={"flex"} flexDirection={'column'} justifyContent={"center"}>
                    <List>
                        <ListItem
                            sx={{
                                display: 'flex',
                                alignContent: 'center',
                                gap: 4,
                                cursor: 'pointer',
                                paddingY: 1.5
                            }}>
                            <HomeIcon sx={{color: '#53B9EA'}}/>
                            <Typography fontSize={15} color={'white'} fontFamily={'Prompt'}
                                        textAlign={"center"}>Home</Typography>
                        </ListItem>
                        <ListItem
                            sx={{
                                display: 'flex',
                                alignContent: 'center',
                                gap: 4,
                                cursor: "pointer",
                                paddingY: 1.5
                            }}>
                            <CompareArrowsIcon sx={{color: '#F05050'}}/>
                            <Typography fontSize={15} color={'white'} fontFamily={'Prompt'}
                                        textAlign={"center"}>Transactions</Typography>
                        </ListItem>
                        <ListItem
                            sx={{
                                display: 'flex',
                                alignContent: 'center',
                                gap: 4,
                                cursor: "pointer",
                                paddingY: 1.5
                            }}>
                            <SubscriptionsIcon sx={{color: '#F19A5E'}}/>
                            <Typography fontSize={15} color={'white'} fontFamily={'Prompt'}
                                        textAlign={"center"}>Subscription Plans</Typography>
                        </ListItem>
                        <ListItem
                            sx={{
                                display: 'flex',
                                alignContent: 'center',
                                gap: 4,
                                cursor: "pointer",
                                paddingY: 1.5
                            }}>
                            <DoneAllIcon sx={{color: 'lightgreen'}}/>
                            <Typography fontSize={15} color={'white'} fontFamily={'Prompt'}
                                        textAlign={"center"}>Settlement</Typography>
                        </ListItem>
                        <ListItem
                            sx={{
                                display: 'flex',
                                alignContent: 'center',
                                gap: 4,
                                cursor: "pointer",
                                paddingY: 1.5
                            }}>
                            <FmdBadIcon sx={{color: '#F05050'}}/>
                            <Typography fontSize={15} color={'white'} fontFamily={'Prompt'}
                                        textAlign={"center"}>Disputes</Typography>
                        </ListItem>
                        <ListItem
                            sx={{
                                display: 'flex',
                                alignContent: 'center',
                                gap: 4,
                                cursor: "pointer",
                                paddingY: 1.5
                            }}>
                            <RequestQuoteIcon sx={{color: '#27C24B'}}/>
                            <Typography fontSize={15} color={'white'} fontFamily={'Prompt'}
                                        textAlign={"center"}>Refunds</Typography>
                        </ListItem>
                        <ListItem
                            sx={{
                                display: 'flex',
                                alignContent: 'center',
                                gap: 4,
                                cursor: "pointer",
                                paddingY: 1.5
                            }}>
                            <PeopleIcon sx={{color: '#FBE165'}}/>
                            <Typography fontSize={15} color={'white'} fontFamily={'Prompt'}
                                        textAlign={"center"}>Customers</Typography>
                        </ListItem>
                        <ListItem
                            sx={{
                                display: 'flex',
                                alignContent: 'center',
                                gap: 4,
                                cursor: "pointer",
                                paddingY: 1.5
                            }}>
                            <MonetizationOnIcon sx={{color: '#27C24C'}}/>
                            <Typography fontSize={15} color={'white'} fontFamily={'Prompt'}
                                        textAlign={"center"}>Offers</Typography>
                        </ListItem>
                        <ListItem
                            sx={{
                                display: 'flex',
                                alignContent: 'center',
                                gap: 4,
                                cursor: "pointer",
                                paddingY: 1.5
                            }}>
                            <CardGiftcardIcon sx={{color: '#F05050'}}/>
                            <Typography fontSize={15} color={'white'} fontFamily={'Prompt'}
                                        textAlign={"center"}>Reward Points</Typography>
                        </ListItem>
                        <ListItem
                            sx={{
                                display: 'flex',
                                alignContent: 'center',
                                gap: 4,
                                cursor: "pointer",
                                paddingY: 1.5
                            }}>
                            <AccountBoxIcon sx={{color: '#53B9EA'}}/>
                            <Typography fontSize={15} color={'white'} fontFamily={'Prompt'}
                                        textAlign={"center"}>My Account</Typography>
                        </ListItem>
                        <ListItem
                            sx={{
                                display: 'flex',
                                alignContent: 'center',
                                gap: 4,
                                cursor: "pointer",
                                paddingY: 1.5
                            }}>
                            <SettingsIcon sx={{color: '#FBE165'}}/>
                            <Typography fontSize={15} color={'white'} fontFamily={'Prompt'}
                                        textAlign={"center"}>Settings</Typography>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>

            {/*right-side content*/}
            <Box className={'app-right-content'}>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/transactions'} element={<Transactions/>}/>
                </Routes>
            </Box>
        </>
    );
}

export default App;
