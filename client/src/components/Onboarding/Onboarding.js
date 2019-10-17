import React from 'react';
import Welcome from './Welcome.js';
import HowItWorks from './HowItWorks.js';

//hook here
const Onboarding = (props) => {
  return (
      <div>
        {/* if else switching routes (displays each onboarding component) */}
          <Welcome />
          <HowItWorks />
      </div>
  )
}

export default Onboarding