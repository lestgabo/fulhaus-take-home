import { Router, Route, Switch } from 'react-router-dom';

import history from './utils/History';
import Home from './views/Home';
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
                </Switch>
            </div>
        </Router>
    );
};

export default App;
