import { Router, Route, Switch } from 'react-router-dom';

import history from './utils/History';
import Home from './views/Home';

// global styles
import './App.css';

const App = () => {
    return (
        <Router history={history}>
            <div id="app">
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
