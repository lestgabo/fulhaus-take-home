import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';

const backgroundSource = '/background/fulhaus-bkg.png';
const useStyles = makeStyles((theme) => ({
    paperContainer: {
        backgroundImage: `url(${backgroundSource})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%',
    },
    welcome: {
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        [theme.breakpoints.up('md')]: {
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '70%',
            height: '100%',
        },
    },
    welcomeText: {
        [theme.breakpoints.up('md')]: {
            paddingTop: '120px', 
        }
    }
}));

const Store = () => {
    const classes = useStyles();
    return (
        <div className={classes.paperContainer}>
            <div className={classes.welcome}>
                <Fade in={true} timeout={3000}>
                    <Typography variant='h1' className={classes.welcomeText}>Welcome Store</Typography>
                </Fade>
            </div>
        </div>
    )
}

export default Store;
