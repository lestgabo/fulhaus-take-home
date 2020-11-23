import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
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

const MyDrawer = () => {
    const classes = useStyles();
    const [drawerState, setDrawerState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    })
    const anchorLocation = 'right';

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerState({ ...drawerState, [anchor]: open });
    }

    return (
        <>
            <Button onClick={toggleDrawer(anchorLocation, true)} className={classes.drawerButton}>
                <Typography variant='h6'>Design</Typography>
            </Button>
            <SwipeableDrawer 
                anchor={anchorLocation} 
                open={drawerState[anchorLocation]} 
                onClose={toggleDrawer(anchorLocation, false)}
                // drawer paper
                PaperProps={{
                    style: {
                        color: '#fff',
                        backgroundColor: '#463d45',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                    }
                }}
                className={classes.drawer}
            >
            <Fade in={true} timeout={1000}>
                <Typography variant='h4' className={classes.drawerText}>Design your own</Typography>
            </Fade>
            </SwipeableDrawer>
        </> 
    )
}

export default MyDrawer;
