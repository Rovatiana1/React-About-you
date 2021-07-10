import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from '../../pages/Home';


const index = () => {
    return(
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Redirect to='/' />
            </Switch>
        </Router>
    )
}

export default index