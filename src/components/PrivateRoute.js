import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import IdleTimerContainer from '../IdealTime';
// import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
// import { styled } from '@mui/system';
import { styled, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TableViewIcon from '@mui/icons-material/TableView';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import TableRowsTwoToneIcon from '@mui/icons-material/TableRowsTwoTone';
import PersonIcon from '@mui/icons-material/Person';
import RunningWithErrorsIcon from '@mui/icons-material/RunningWithErrors';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import StickyHeadTable from './Dashboard';
import { Link } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));



export default function PrivateRoute({ component: Component, name, ...rest }) {
    let history = useHistory();
    function handlelogout() {
        localStorage.clear();
        history.push("/");
    }
    let currentUser = localStorage.getItem("isLoggedIn") === null ? false : localStorage.getItem("isLoggedIn");
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const isAdmin = localStorage.getItem('role') === 'admin'
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Route
            {...rest}
            render={(props) => {
                return currentUser ? (
                    <>
                        {/* <IdleTimerContainer />  */}

                        <Container fluid >
                            <Box sx={{ display: 'flex' }}>
                                <CssBaseline />
                                <AppBar position="fixed" open={open}>
                                    <Toolbar>
                                        <IconButton
                                            color="inherit"
                                            aria-label="open drawer"
                                            onClick={handleDrawerOpen}
                                            edge="start"
                                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <Typography variant="h6" noWrap component="div">
                                            {name || ''}
                                        </Typography>
                                        
                                        {/* <div style={{ */}
                                            {/* DashBoards */}
                                            {/*  */}
                                            {/*  */}
                                        {/* // }} > */}
                                            {/* <Button variant="contained" endIcon={<LogoutIcon />} size="large" href="/" > */}
                                                {/* LogOut */}
                                            {/* </Button> */}
                                        {/* </div> */}
                                    </Toolbar>
                                </AppBar>
                                <Drawer
                                    sx={{
                                        width: drawerWidth,
                                        flexShrink: 0,
                                        '& .MuiDrawer-paper': {
                                            width: drawerWidth,
                                            boxSizing: 'border-box',
                                        },
                                    }}
                                    variant="persistent"
                                    anchor="left"
                                    open={open}
                                >
                                    <DrawerHeader>
                                        <IconButton onClick={handleDrawerClose}>
                                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                                        </IconButton>
                                    </DrawerHeader>
                                    <Divider />
                                    <List>
                                        {/* Add Common Links here */}

                                        {/* END */}
                                        {isAdmin ? (
                                             <>
                                               <ListItem component={Link} to="/Defaulter" button key='Defaulter'>
                                                    <ListItemIcon>
                                                        <RunningWithErrorsIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary='Defaulter' />
                                                </ListItem>
                                                <ListItem component={Link} to="/ExpenseRecords" button key='ExpenseRecords'>
                                            <ListItemIcon>
                                                <TableViewIcon />
                                            </ListItemIcon>
                                            <ListItemText primary='Expense Records' />
                                        </ListItem>
                                        <ListItem component={Link} to="/MaintenanceRecords" button key='MaintenanceRecords'>
                                            <ListItemIcon>
                                                <TableRowsTwoToneIcon />
                                            </ListItemIcon>
                                            <ListItemText primary='Maintenance Records' />
                                        </ListItem>
                                        
                                        <ListItem component={Link} to="/PersonalDetails" button key='PersonalDetails'>
                                            <ListItemIcon>
                                                <PersonIcon />
                                            </ListItemIcon>
                                            <ListItemText primary='Personal Details' />
                                        </ListItem>
                                             </>
                                        ) : (
                                             <>
                                               <ListItem component={Link} to="/UserDetails" button key='User Details'>
                                                    <ListItemIcon>
                                                        <VerifiedUserOutlinedIcon />
                                                    </ListItemIcon>
                                                    <ListItemText primary='User Details' />
                                                </ListItem>
                                                <ListItem component={Link} to="/SocietyRecords" button key='SocietyRecords'>
                                            <ListItemIcon>
                                                <TableChartTwoToneIcon />
                                            </ListItemIcon>
                                            <ListItemText primary='Society Records' />
                                        </ListItem>
                                             </>

                                        )}
                                        
                                        
                                        
                                        <ListItem onClick={handlelogout} button key='logout'>
                                            <ListItemIcon>
                                                <LogoutIcon />
                                            </ListItemIcon>
                                            <ListItemText primary='Logout' />
                                        </ListItem>

                                    </List>
                                    <Divider />
                                </Drawer>
                                <Main open={open}>
                                    <DrawerHeader />
                                    <Component {...props} />
                                </Main>
                            </Box>

                        </Container>
                    </>
                ) : (
                    <Redirect to="/" />
                );
            }}
        ></Route>
    );
}