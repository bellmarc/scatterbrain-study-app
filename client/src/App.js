import React from 'react';
import './style/App.css';
import { Switch, Route } from 'react-router-dom';
import Onboarding from './components/Onboarding/Onboarding.js';
import InSession from './components/InSession/InSession.js';
import Settings from './components/Settings';
import Help from './components/Help';
import Landing from './components/Landing'
import TopicsPage from './components/TopicPage/TopicPage.js';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className='app'>
            <Navbar />
            <Switch>
                <Route path="/topics" component={ TopicsPage }/>
                <Route path="/session/:topicId" component={ InSession }/>
                <Route path="/settings" component={ Settings }/>
                <Route path="/help" component={ Help }/>
                <Route path="/onboard" component={ Onboarding }/>
                <Route exact path="/" component={ Landing }/>
            </Switch>
        </div>
    )
}

export default App
