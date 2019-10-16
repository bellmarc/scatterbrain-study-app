import React from 'react';
import '../style/OnboardingWelcome.css';

function OnboardingWelcome() {
    return (
        <div className="welcome-page">
            <div className="text-container">
                <h1>Welcome</h1>
                <h2>to Scatterbrain Study Tool</h2>
                <p className="welcome-info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident fuga, minus consequatur fugiat quia molestiae perferendis dicta non, iusto ipsum aperiam ipsam eum omnis doloribus quae! Error minima illo cum.</p>
            </div>

            <button className="welcome-btn">Get Started</button>
        </div>
    )
}




export default OnboardingWelcome