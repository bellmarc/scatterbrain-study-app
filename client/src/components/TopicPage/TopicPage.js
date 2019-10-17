import React from 'react';
import '../../style/TopicPage/TopicPage.css';
import TopicInfo from './TopicInfo'
import TopicList from './TopicList';
import TopicInstructions from './TopicInstructions';

//user for test, will be from context
const currentUser = {
    name: 'Bobby',
    userId: '5da7408bf1f54a4e0898b990'
}

function TopicPage(){


    return (
        <main className="topic-page">
            <TopicInstructions />
            {/* <TopicInfo /> */}
            <button className="topic-smart-session">Smart Session</button>
            <TopicList currentUser = {currentUser}/>
        </main>
    )
}

export default TopicPage;