import {Box, Button, Divider, Step, StepContent, StepLabel, Stepper, Typography} from "@mui/material";
import React from "react";
import MainHeader from "../../components/MainHeader";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const bottomBoxesArr = [
    {title: 'Payment Volume', subtitle: '₹ 6.72L'},
    {title: 'Number of Payments', subtitle: '2.12K'},
    {title: 'Number of Refunds', subtitle: '44'},
]

const BottomBox = (props: { title: string, subtitle: string }) => {
    return (
        <Box borderRadius={4} bgcolor={'white'} padding={3} flex={1}>
            <Typography fontFamily={'Poppins'} fontSize={14} fontWeight={600} color={'#444444'}
                        marginBottom={1}>{props.title}</Typography>
            <Typography fontFamily={'Poppins'} fontSize={18} fontWeight={600} color={'#444444'}
                        whiteSpace={'pre'}>{props.subtitle}</Typography>
        </Box>
    )
}

const Home = () => {
    return (
        <>
            {/*header*/}
            <MainHeader/>

            <Box padding={5}>
                {/*upper text*/}
                <Typography fontFamily={'Poppins'} fontSize={18} fontWeight={500} color={'#444444'}
                            marginBottom={4}>Welcome
                    to your
                    Dashboard,
                    Groww90</Typography>

                {/*first white box*/}
                <Box bgcolor={'white'} borderRadius={2} paddingY={6} paddingX={3} marginBottom={4}>
                    <Typography fontFamily={'Poppins'} fontSize={18} fontWeight={600} color={'#444444'}
                                marginBottom={2}>Your are just
                        steps away from
                        enabling live payments</Typography>
                    <Typography fontFamily={'Poppins'} fontSize={18} fontWeight={500} color={'#4C5565'}
                                marginBottom={4}>Submit a few KYC
                        details and start
                        accepting payments from your customers</Typography>

                    <Stepper activeStep={1} alternativeLabel={true}>
                        <Step key={0}>
                            <StepLabel>
                                <Typography fontFamily={'Poppins'} fontSize={15} fontWeight={500} color={'#444444'}
                                            marginBottom={2}>Contact Details</Typography>
                            </StepLabel>
                        </Step>
                        <Step key={1}>
                            <StepLabel>
                                <Typography fontFamily={'Poppins'} fontSize={15} fontWeight={500} color={'#444444'}
                                            marginBottom={2}>Live payments and Settlements</Typography>
                            </StepLabel>
                            <StepContent>
                                <Typography fontFamily={'Poppins'} fontSize={13} fontWeight={500}
                                            color={'#4C5565D9'}
                                            marginBottom={2}>Submit a few KYC details to start accepting payments
                                    and receive settlement in your account.</Typography>
                            </StepContent>
                        </Step>
                        <Step key={2}>
                            <StepLabel>
                                <Typography fontFamily={'Poppins'} fontSize={15} fontWeight={500} color={'#444444'}
                                            marginBottom={2}>Account Activation</Typography>
                            </StepLabel>
                            <StepContent>
                                <Typography fontFamily={'Poppins'} fontSize={13} fontWeight={500}
                                            color={'#4C5565D9'}
                                            marginBottom={2}>Get all the KYC details approved to complete the
                                    account activation</Typography>
                            </StepContent>
                        </Step>
                    </Stepper>

                    <Box display={'flex'} justifyContent={'center'} marginTop={3}>
                        <Button variant={'contained'} size={"large"}
                                sx={{textTransform: 'none', fontFamily: 'Poppins', fontWeight: 500}}>Submit KYC</Button>
                    </Box>
                </Box>

                {/*second white box*/}
                <Box bgcolor={'white'} borderRadius={2} padding={3} display={"flex"} justifyContent={'space-between'}
                     marginBottom={4}>
                    {/*left section*/}
                    <Box display={"flex"}>
                        <Box border={1} borderColor={'#4C5565'} padding={1.5} display={"flex"} alignItems={'center'}
                             gap={1}>
                            <CalendarTodayIcon sx={{color: '#4C5565'}}/>
                            <Typography fontFamily={'Poppins'} fontSize={13} fontWeight={500} color={'#4C5565'}>Past 30
                                Days</Typography>
                            <KeyboardArrowDownIcon sx={{color: '#4C5565'}}/>
                        </Box>
                        <Box border={1} borderColor={'#4C5565'} padding={1.5} display={"flex"} alignItems={'center'}
                             gap={1}>
                            <Typography fontFamily={'Poppins'} fontSize={13} fontWeight={500} color={'#4C5565'}
                                        whiteSpace={'pre'}>{`12 Oct 2021      to      12 Nov 2021`}</Typography>
                        </Box>
                    </Box>

                    {/*right-section*/}
                    <Box border={1} borderColor={'#4C5565'} padding={1.5} display={"flex"} alignItems={'center'}
                         gap={1}>
                        <Typography fontFamily={'Poppins'} fontSize={13} fontWeight={500} color={'#4C5565'}
                                    whiteSpace={'pre'}>{`Current Balance :    ₹ 2.2L`}</Typography>
                        <Divider/>
                    </Box>
                </Box>

                {/*third section boxes*/}
                <Box display={"flex"} gap={4}>
                    {bottomBoxesArr.map(element => <BottomBox title={element.title} subtitle={element.subtitle}/>)}
                </Box>
            </Box>
        </>
    )
}

export default Home