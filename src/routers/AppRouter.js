import React from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path='/login' component={LoginScreen} />
                    <Route exact path="/" component={CalendarScreen} />
                    <Redirect to='/'/>
                </Switch>
            </div>
        </Router>
    )
}
