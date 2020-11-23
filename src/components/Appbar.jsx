import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'; 
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        backgroundColor: 'transparent',
        boxShadow: 'none',
        padding: '30px 60px 0px 60px',
    },
    rightSideDesktop: {
        display: 'none',
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
        textDecoration: 'none',
    },
}));

const Appbar = () => {
    const classes = useStyles();
    const mobileMenuId = 'id-samples-store-contact';

    // const renderMobileMenu = ()

    return (
        <div className={classes.root}>
            <AppBar position='static' className={classes.appBar}>
                <Toolbar>
                    <Grid container direction='row' justify='space-between' alignItems='center'>
                        <Grid item>
                            <Typography variant='h6'>Houseandhome.com</Typography>
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
                        </Grid>
                        <Grid item className={classes.rightSideMobile}>
                            <IconButton
                                aria-label='show more'
                                aria-controls={mobileMenuId}
                                aria-haspopup='true'
                                // onClick={handleMobileMenuOpen}
                                color='inherit'
                            >
                                <MoreIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

        </div>
    )
};

export default Appbar;
