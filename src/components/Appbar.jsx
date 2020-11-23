import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'; 
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';

import MyDrawer from './MyDrawer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        [theme.breakpoints.up('md')]: {
            position: 'absolute',
            backgroundColor: 'transparent',
            boxShadow: 'none',
            padding: '30px 60px 0px 60px',
        }
    },
    rightSideDesktop: {
        display: 'none',
        // if width higher or equal to md, then display flex else none
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            flexDirection: 'row',
        },
    },
    rightSideMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
    links: {
        padding: '0 20px',
        // keeps links white
        textDecoration: 'none',
        '&:visited': {
            color: 'inherit',
        }
    },
    menuItem: {
        justifyContent: 'center',
    },
    drawer: {
        zIndex: '50 !important',
    },
    drawerButton: {
        color: '#fff',
        padding: '0 20px',
        textTransform: 'unset',
    },
    drawerText: {
        fontStyle: 'italic',
        textDecoration: 'underline',
        minWidth: '600px',
        textAlign: 'center',
    }
}));


const Appbar = () => {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const mobileMenuId = 'id-samples-store-contact';
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // menu
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    }

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    }

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            achororigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            PaperProps={{
                style: {
                    color: '#fff',
                    backgroundColor: '#463d45'
                }
            }}
        >
            <MenuItem className={classes.menuItem}>
                <Link to='/samples' className={classes.links}>
                    <Typography variant='h6' >Samples</Typography>
                </Link>
            </MenuItem>            
            <MenuItem className={classes.menuItem}>
                <Link to='/store' className={classes.links}>
                    <Typography variant='h6' className={classes.links}>Store</Typography>
                </Link>                     
            </MenuItem>            
            <MenuItem className={classes.menuItem}>
                <Link to='/contact' className={classes.links}>
                    <Typography variant='h6' className={classes.links}>Contact</Typography>
                </Link>
            </MenuItem>
            <MenuItem className={classes.menuItem}>
                <MyDrawer />
            </MenuItem>
        </Menu>
    )

    return (
        <div className={classes.root}>
            <AppBar position='static' className={classes.appBar}>
                <Toolbar>
                    <Grid container direction='row' justify='space-between' alignItems='center'>
                        <Grid item>
                            <Link to='/' className={classes.links}>
                                <Typography variant='h6'>Houseandhome.com</Typography>
                            </Link>
                        </Grid>           
                        <Grid item className={classes.rightSideDesktop}>
                            <Link to='/samples' className={classes.links}>
                                <Typography variant='h6' >Samples</Typography>
                            </Link>
                            <Link to='/store' className={classes.links}>
                                <Typography variant='h6' className={classes.links}>Store</Typography>
                            </Link>                     
                            <Link to='/contact' className={classes.links}>
                                <Typography variant='h6' className={classes.links}>Contact</Typography>
                            </Link>
                            {/* drawer */}
                            <MyDrawer />
                        </Grid>
                        <Grid item className={classes.rightSideMobile}>
                            <IconButton
                                aria-label='show more'
                                aria-controls={mobileMenuId}
                                aria-haspopup='true'
                                onClick={handleMobileMenuOpen}
                                color='inherit'
                            >
                                <MoreIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
        </div>
    )
};

export default Appbar;
