import React from "react";
import Welcome from "./Welcome.js";
import HowItWorks from "./HowItWorks.js";
import StartProfile from "./StartProfile.js";
import EnterTopic from "./EnterTopic.js";
import AddPriority from "./AddPriority.js";
import Continue from "./Continue.js";
import ProfileComplete from "./ProfileComplete.js";
import { Switch, Route } from "react-router-dom";

//hook here, save userName to context dummy array in meantime
const Onboarding = () => {
  return (
    <div>
      {/* if else switching routes (displays each onboarding component) */}
      <Switch>
        <Route exact path="/onboard" component={ Welcome } />
        <Route exact path="/onboard/how" component={ HowItWorks } />
        <Route exact path="/onboard/start-profile" component={ StartProfile } />
        <Route exact path="/onboard/enter-topic" component={ EnterTopic } />
        <Route path="/onboard/add-priority/:topicId" component={ AddPriority } />
        <Route path="/onboard/redirect" component={ Continue } />
        <Route
          exact
          path="/onboard/profile-complete"
          component={ ProfileComplete }
        />
        <Route exact path="/onboard/main" component={ ProfileComplete } />
      </Switch>
    </div>
  );
};

export default Onboarding;
