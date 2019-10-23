import React from "react";
import Welcome from "./Welcome.js";
import GetStarted from "./GetStarted.js";
import StartProfile from "./StartProfile.js";
import EnterTopic from "./EnterTopic.js";
import AddPriority from "./AddPriority.js";
import Continue from "./Continue.js";
import ProfileComplete from "./ProfileComplete.js";
import { Switch, Route } from "react-router-dom";

//hook here, save userName to context dummy array in meantime
const Onboarding = () => {
  return (
    <div className="onboarding-container">
      {/* if else switching routes (displays each onboarding component) */}
      <Switch>
        <Route exact path="/onboard" component={ Welcome } />
        <Route exact path="/onboard/how" component={ GetStarted } />
        <Route exact path="/onboard/startProfile" component={ StartProfile } />
        <Route exact path="/onboard/enterTopic" component={ EnterTopic } />
        <Route path="/onboard/addPriority/:topicId" component={ AddPriority } />
        <Route path="/onboard/redirect" component={ Continue } />
        <Route
          exact
          path="/onboard/profileComplete"
          component={ ProfileComplete }
        />
      </Switch>
    </div>
  );
};

export default Onboarding;
