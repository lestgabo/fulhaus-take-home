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
        height: '100vh',
    },
    welcome: {
        [theme.breakpoints.up('md')]: {
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%'
        },
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.paperContainer}>
            <div className={classes.welcome}>
                <Fade in={true} timeout={3000}>
                    <Typography variant='h1'>Welcome home</Typography>
                </Fade>
            </div>
        </div>
    )
}


export default Home;
