import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        padding: '40px 60px 0px 60px',
    },
    rightSide: {
        display: 'flex',
        flexDirection: 'row',
    },
    links: {
        padding: '0 20px',
    }
}));

const Appbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position='static' className={classes.appBar}>
                <Toolbar>
                    <Grid container direction='row' justify='space-between' alignItems='center'>
                        <Grid item>
                            <Typography variant='h6'>Houseandhome.com</Typography>
                        </Grid>           
                        <Grid item className={classes.rightSide}>
                            <Typography variant='h6' className={classes.links}>Samples</Typography>
                            <Typography variant='h6' className={classes.links}>Store</Typography>
                            <Typography variant='h6' className={classes.links}>Contact</Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
};

export default Appbar;
