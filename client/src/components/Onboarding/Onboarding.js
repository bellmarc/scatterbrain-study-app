import React from 'react';
import Welcome from './Welcome.js';
import HowItWorks from './HowItWorks.js';
import { Switch, Route } from 'react-router-dom';


//hook here
const Onboarding = () => {
  return (
      <div>
        {/* if else switching routes (displays each onboarding component) */}
        <Switch>
          <Route exact path="/onboard/how" component={ HowItWorks } />
          <Route exact path="/onboard" component={ Welcome } />
        </Switch>
      </div>
  )
}


export default Onboarding