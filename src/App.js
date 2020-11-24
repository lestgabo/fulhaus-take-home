import { Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import history from './utils/History';
import Home from './views/Home';
import Contact from './views/Contact';
import Samples from './views/Samples';
import Store from './views/Store';
import Appbar from './components/Appbar';

// global styles
import './App.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        padding: '0px',
        margin: '0px',
    },
}));

const App = () => {
    const classes = useStyles();
    return (
        <Router history={history}>
            <div id="app" className={classes.root}>
                <Appbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/samples" component={Samples} />
                    <Route path="/store" component={Store} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
