import React from 'react';
import './style/App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Onboarding from './components/Onboarding';
import TopicsList from './components/TopicsList';
import InSession from './components/InSession';
import Settings from './components/Settings';
import Help from './components/Help';

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/topics" component={ TopicsList }/>                
                <Route path="/session" component={ InSession }/>
                <Route path="/settings" component={ Settings }/>
                <Route path="/help" component={ Help }/>
                <Route path="/" component={ Onboarding }/>
            </Switch>
        </div>
    )
}

export default App



