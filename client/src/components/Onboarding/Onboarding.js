import React from 'react';
import OnboardingWelcome from '../Onboarding/OnboardingWelcome.js';

//hook here
const Onboarding = (props) => {
  return (
      <div>
        {/* if else switching routes (displays each onboarding component) */}
          <OnboardingWelcome />

      </div>
  )
}

export default Onboarding