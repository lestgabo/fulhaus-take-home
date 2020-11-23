import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const backgroundSource = '/background/fulhaus-bkg.png';
const useStyles = makeStyles(() => ({
    paperContainer: {
        backgroundImage: `url(${backgroundSource})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
    },
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.paperContainer}>
   
        </div>
    )
}


export default Home;
