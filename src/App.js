import { Router, Route, Switch } from 'react-router-dom';

import history from './utils/History';
import Home from './views/Home';
import Contact from './views/Contact';
import Samples from './views/Samples';
import Store from './views/Store';
import Appbar from './components/Appbar';

// global styles
import './App.css';

const App = () => {
    return (
        <Router history={history}>
            <div id="app">
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
