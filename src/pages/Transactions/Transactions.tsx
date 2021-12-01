import {Box, Button, MenuItem, Select, Tab, Tabs, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import MainHeader from "../../components/MainHeader";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

enum TRANSACTION_STATUS {
    CAPTURED = 'Captured',
    FAILED = 'Failed'
}

const transactionsTableData = [
    {
        paymentId: 'pay_G11ZY646x6Afk3',
        amount: '₹599',
        email: 'abc@gmail.com',
        contact: '+919876543210',
        createdAt: '12 Nov 2021, 07:25:23 pm',
        status: TRANSACTION_STATUS.CAPTURED,
    },
    {
        paymentId: 'pay_G11ZY646x6Afk3',
        amount: '₹299',
        email: 'xyz@gmail.com',
        contact: '+919876543210',
        createdAt: '12 Nov 2021, 07:25:23 pm',
        status: TRANSACTION_STATUS.CAPTURED,
    },
    {
        paymentId: 'pay_G11ZY646x6Afk3',
        amount: '₹799',
        email: 'abc@gmail.com',
        contact: '+919876543210',
        createdAt: '12 Nov 2021, 07:25:23 pm',
        status: TRANSACTION_STATUS.FAILED,
    },
    {
        paymentId: 'pay_G11ZY646x6Afk3',
        amount: '₹399',
        email: 'pqr@gmail.com',
        contact: '+919876543210',
        createdAt: '12 Nov 2021, 07:25:23 pm',
        status: TRANSACTION_STATUS.FAILED,
    },
    {
        paymentId: 'pay_G11ZY646x6Afk3',
        amount: '₹199',
        email: 'abc@gmail.com',
        contact: '+919876543210',
        createdAt: '12 Nov 2021, 07:25:23 pm',
        status: TRANSACTION_STATUS.CAPTURED,
    },
    {
        paymentId: 'pay_G11ZY646x6Afk3',
        amount: '₹499',
        email: 'abc@gmail.com',
        contact: '+919876543210',
        createdAt: '12 Nov 2021, 07:25:23 pm',
        status: TRANSACTION_STATUS.CAPTURED,
    },
    {
        paymentId: 'pay_G11ZY646x6Afk3',
        amount: '₹399',
        email: 'abc@gmail.com',
        contact: '+919876543210',
        createdAt: '12 Nov 2021, 07:25:23 pm',
        status: TRANSACTION_STATUS.CAPTURED,
    },
    {
        paymentId: 'pay_G11ZY646x6Afk3',
        amount: '₹999',
        email: 'abc@gmail.com',
        contact: '+919876543210',
        createdAt: '12 Nov 2021, 07:25:23 pm',
        status: TRANSACTION_STATUS.CAPTURED,
    }
]

const TransactionTableRow = (props: { paymentId: string, amount: string, email: string, contact: string, createdAt: string, status: string, bgcolor: string }) => {
    return (
        <Box display={'flex'} bgcolor={props.bgcolor} paddingY={2} paddingX={4} border={1}
             borderColor={'gray'}>
            <Typography fontFamily={'Poppins'} fontWeight={500} fontSize={14}
                        color={'#2B83EA'} flex={2} display={'flex'} alignItems={"center"}>{props.paymentId}</Typography>
            <Typography fontFamily={'Poppins'} fontWeight={500} fontSize={14}
                        color={'#4C5565'} flex={1} display={'flex'} alignItems={"center"}>{props.amount}</Typography>
            <Typography fontFamily={'Poppins'} fontWeight={500} fontSize={14}
                        color={'#4C5565'} flex={1} display={'flex'} alignItems={"center"}>{props.email}</Typography>
            <Typography fontFamily={'Poppins'} fontWeight={500} fontSize={14}
                        color={'#4C5565'} flex={1} display={'flex'} alignItems={"center"}>{props.contact}</Typography>
            <Typography fontFamily={'Poppins'} fontWeight={500} fontSize={14}
                        color={'#4C5565'} flex={2} display={'flex'} alignItems={"center"}>{props.createdAt}</Typography>
            <Box borderRadius={5} flex={1} padding={1}
                 bgcolor={props.status === TRANSACTION_STATUS.CAPTURED ? '#26C24C' : '#EA534C'}
                 display={"flex"} justifyContent={'center'}>
                <Typography fontFamily={'Poppins'} fontWeight={500} fontSize={14}
                            color={'white'}>{props.status}</Typography>
            </Box>
        </Box>
    )
}

const Transactions = () => {
    const [tabsValue, setTabsValue] = useState(0);

    return (
        <>
            {/*header*/}
            <MainHeader/>
            <Box padding={5}>
                <Box display={'flex'} flexDirection={'column'} flex={1} borderRadius={3} bgcolor={'white'} border={1}
                     borderColor={'gray'}>
                    {/*tabs section*/}
                    <Box padding={2}>
                        <Tabs value={tabsValue}>
                            <Tab label={'Payments'} onClick={() => setTabsValue(0)}/>
                            <Tab label={'Refunds'} onClick={() => setTabsValue(1)}/>
                            <Tab label={'Orders'} onClick={() => setTabsValue(2)}/>
                        </Tabs>
                    </Box>
                    <hr style={{width: '100%', color: 'gray', opacity: 0.3, marginTop: '-18px', marginBottom: 50}}/>

                    {/*search section*/}
                    <Box display={'flex'} justifyContent={'space-between'} gap={2} marginBottom={3} padding={2}>
                        {/*1st*/}
                        <Box flex={1}>
                            <Typography fontFamily={'Poppins'} fontWeight={500} fontSize={14} color={'#2C3539'}>Payment
                                Id</Typography>
                            <TextField variant={'outlined'}/>
                        </Box>

                        {/*2nd*/}
                        <Box flex={2}>
                            <Typography fontFamily={'Poppins'} fontWeight={500} fontSize={14}
                                        color={'#2C3539'}>Duration</Typography>
                            <Box display={"flex"}>
                                <Box border={1} borderColor={'#4C5565'} padding={1.5} display={"flex"}
                                     alignItems={'center'}
                                     gap={1}>
                                    <CalendarTodayIcon sx={{color: '#4C5565'}}/>
                                    <Typography fontFamily={'Poppins'} fontSize={13} fontWeight={500} color={'#4C5565'}>Past
                                        7
                                        Days</Typography>
                                    <KeyboardArrowDownIcon sx={{color: '#4C5565'}}/>
                                </Box>
                                <Box border={1} borderColor={'#4C5565'} padding={1.5} display={"flex"}
                                     alignItems={'center'}
                                     gap={1}>
                                    <Typography fontFamily={'Poppins'} fontSize={13} fontWeight={500} color={'#4C5565'}
                                                whiteSpace={'pre'}>{`11 Nov 2021      to      18 Nov 2021`}</Typography>
                                </Box>
                            </Box>
                        </Box>

                        {/*3rd*/}
                        <Box flex={1}>
                            <Typography fontFamily={'Poppins'} fontWeight={500} fontSize={14}
                                        color={'#2C3539'}>Status</Typography>
                            <Select defaultValue={0} fullWidth={true}>
                                <MenuItem value={0}>All</MenuItem>
                            </Select>
                        </Box>

                        {/*4th*/}
                        <Box flex={1}>
                            <Typography fontFamily={'Poppins'} fontWeight={500} fontSize={14}
                                        color={'#2C3539'}>Email</Typography>
                            <TextField variant={'outlined'} type={'email'}/>
                        </Box>
                    </Box>

                    {/*search-button*/}
                    <Box marginX={"auto"} marginBottom={3}>
                        <Button variant={'contained'} size={"large"}
                                sx={{textTransform: 'none', fontFamily: 'Poppins', fontWeight: 500}}>Search</Button>
                    </Box>

                    {/*transactions-table*/}
                    <Box>
                        <Box display={'flex'} bgcolor={'#F9F9F9'} paddingY={2} paddingX={4} border={1}
                             borderColor={'gray'}>
                            <Typography fontFamily={'Poppins'} fontWeight={500} fontSize={18}
                                        color={'#444444'} flex={2}>Payment Id</Typography>
                            <Typography fontFamily={'Poppins'} fontWeight={500} fontSize={18}
                                        color={'#444444'} flex={1}>Amount</Typography>
                            <Typography fontFamily={'Poppins'} fontWeight={500} fontSize={18}
                                        color={'#444444'} flex={1}>Email</Typography>
                            <Typography fontFamily={'Poppins'} fontWeight={500} fontSize={18}
                                        color={'#444444'} flex={1}>Contact</Typography>
                            <Typography fontFamily={'Poppins'} fontWeight={500} fontSize={18}
                                        color={'#444444'} flex={2}>Created At</Typography>
                            <Typography fontFamily={'Poppins'} fontWeight={500} fontSize={18}
                                        color={'#444444'} flex={1}>Status</Typography>
                        </Box>
                        {transactionsTableData.map((element, index) => <TransactionTableRow
                            paymentId={element.paymentId}
                            amount={element.amount}
                            email={element.email}
                            contact={element.contact}
                            createdAt={element.createdAt}
                            status={element.status}
                            bgcolor={index % 2 === 0 ? 'white' : '#F9F9F9'}/>)}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Transactions