import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Accordion, AccordionDetails, AccordionSummary, Container, Slide, useScrollTrigger } from '@mui/material';
import Logo from '../Logo';
import PrimaryButton from '../../Custom/PrimaryButton';
import Link from 'next/link';
import MegaMenu from './MegaMenu';
import Solutions from './Solutions';
import Learn from './Learn';
import SolutionsMobile from './SolutionsMobile';
import NestedMenu from './NestedMenu';
import LearnMobile from './LearnMobile';

const drawerWidth = 260;
const navItems = [
    {
        label: "Pricing",
        path: "/pricing"
    },
    {
        label: "Solutions",
        path: "",
        Element: Solutions,
        ElementMobile: SolutionsMobile,
    },
    {
        label: "Portfolio",
        path: "/portfolio",
    },
    {
        label: "Learn",
        path: "",
        Element: Learn,
        ElementMobile: LearnMobile,
    },
];

const navItemStyle = {
    color: 'text.darkGray',
    textTransform: "capitalize",
    '&:hover': {
        color: "secondary.main"
    }
}


function Nav(props) {
    const { children } = props;
    const trigger = useScrollTrigger();
    const triggerAtTop = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar sx={{ bgcolor: "light.main", py: 1, boxShadow: triggerAtTop ? "0px 0px 10px rgba(0, 0, 0, 0.1)" : "none" }}>
                {children}
            </AppBar>
        </Slide>
    );
}


function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ my: 2 }}>
                <Link href="/">
                    <Box component={"span"} >
                        <Logo />
                    </Box>
                </Link>
            </Box>
            <Divider />
            <List>
                {navItems.map(({ label, path, ElementMobile }) => (
                    path === "" ?
                        <NestedMenu label={label}>
                            <ElementMobile />
                        </NestedMenu> :
                        <Link key={label} href={path} onClick={handleDrawerToggle}>
                            <ListItem disablePadding>
                                <ListItemButton sx={{ textAlign: 'center' }}>
                                    <ListItemText sx={navItemStyle}>{label}</ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                ))}
            </List>
        </Box>
    );


    return (
        <Box id="back-to-top-anchor" sx={{ display: 'flex', pt: 10, bgcolor: "light.main" }}>
            <Nav>
                <Container>
                    <Toolbar sx={{ padding: "0 !important" }}>
                        <Box sx={{ flexGrow: 1, '& img': { cursor: "pointer" } }}>
                            <Link href="/" passHref>
                                <Box component={"span"}>
                                    <Logo />
                                </Box>
                            </Link>
                        </Box>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' } }}
                        >
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="#FC9823" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.08342 10.8321C0.796082 10.8321 0.520509 10.7179 0.317328 10.5147C0.114146 10.3116 0 10.036 0 9.74865V1.08342C0 0.796082 0.114146 0.520509 0.317328 0.317328C0.520509 0.114146 0.796082 0 1.08342 0H9.75081C10.0382 0 10.3137 0.114146 10.5169 0.317328C10.7201 0.520509 10.8342 0.796082 10.8342 1.08342V9.74865C10.8342 10.036 10.7201 10.3116 10.5169 10.5147C10.3137 10.7179 10.0382 10.8321 9.75081 10.8321H1.08342ZM16.2514 10.8321C15.964 10.8321 15.6884 10.7179 15.4853 10.5147C15.2821 10.3116 15.1679 10.036 15.1679 9.74865V1.08342C15.1679 0.796082 15.2821 0.520509 15.4853 0.317328C15.6884 0.114146 15.964 0 16.2514 0H24.9166C25.2039 0 25.4795 0.114146 25.6827 0.317328C25.8859 0.520509 26 0.796082 26 1.08342V9.74865C26 10.036 25.8859 10.3116 25.6827 10.5147C25.4795 10.7179 25.2039 10.8321 24.9166 10.8321H16.2514ZM1.08342 26C0.796082 26 0.520509 25.8859 0.317328 25.6827C0.114146 25.4795 0 25.2039 0 24.9166V16.2492C0 15.9618 0.114146 15.6863 0.317328 15.4831C0.520509 15.2799 0.796082 15.1658 1.08342 15.1658H9.75081C10.0382 15.1658 10.3137 15.2799 10.5169 15.4831C10.7201 15.6863 10.8342 15.9618 10.8342 16.2492V24.9166C10.8342 25.2039 10.7201 25.4795 10.5169 25.6827C10.3137 25.8859 10.0382 26 9.75081 26H1.08342ZM16.2514 26C15.964 26 15.6884 25.8859 15.4853 25.6827C15.2821 25.4795 15.1679 25.2039 15.1679 24.9166V16.2492C15.1679 15.9618 15.2821 15.6863 15.4853 15.4831C15.6884 15.2799 15.964 15.1658 16.2514 15.1658H24.9166C25.2039 15.1658 25.4795 15.2799 25.6827 15.4831C25.8859 15.6863 26 15.9618 26 16.2492V24.9166C26 25.2039 25.8859 25.4795 25.6827 25.6827C25.4795 25.8859 25.2039 26 24.9166 26H16.2514Z" />
                            </svg>
                        </IconButton>

                        <Box sx={{ display: { md: 'block', xs: 'none' }, '& button': { ml: 2 } }}>
                            {navItems.map(({ label, path, Element }) => (
                                path === "" ?
                                    <MegaMenu key={label} label={label} sx={navItemStyle}>
                                        <Element />
                                    </MegaMenu>
                                    :
                                    <Link key={label} href={path} passHref>
                                        <Box component={Button} sx={navItemStyle}>
                                            {label}
                                        </Box>
                                    </Link>
                            ))}
                            <Link href={"/contact-us"}>
                                <PrimaryButton iconLess sx={{ padding: "7px 15px" }} color="secondary">
                                    Get Started
                                </PrimaryButton>
                            </Link>

                        </Box>
                    </Toolbar>
                </Container>
            </Nav>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { md: 'none', xs: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}


export default Navbar;
