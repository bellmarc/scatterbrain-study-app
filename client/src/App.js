import React from 'react';
import './style/App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Onboarding from './components/Onboarding';
import InSession from './components/InSession';
import Settings from './components/Settings';
import Help from './components/Help';
import Landing from './components/Landing'
import TopicsPage from './components/TopicPage/TopicPage.js';

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route path="/topics" component={ TopicsPage }/>                
                <Route path="/session" component={ InSession }/>
                <Route path="/settings" component={ Settings }/>
                <Route path="/help" component={ Help }/>
                <Route path="/onboard" component={ Onboarding }/>
                <Route path="/" component={ Landing }/>
            </Switch>
        </div>
    )
}

export default App



