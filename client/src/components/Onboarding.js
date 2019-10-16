import React from 'react';
import OnboardingWelcome from './OnboardingWelcome.js';

const Onboarding = (props) => {
  return (
      <div>
        {/* if else switching routes (displays each onboarding component) */}
        <p1>First Page</p1>
          <OnboardingWelcome />

      </div>
  )
}

export default Onboarding