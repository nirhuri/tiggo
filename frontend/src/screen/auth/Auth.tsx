import React, {useState} from 'react';
import {View} from 'react-native';
import SigninScreen from './SigninScreen';
import SignupScreen from './SignupScreen';
export default function Auth() {
  const [isHaveAccuont, setIsHaveAccuont] = useState(false);
  return (
    <>
      {!isHaveAccuont && (
        <SigninScreen
          goToSingup={() => {
            setIsHaveAccuont(true);
          }}
        />
      )}
      {isHaveAccuont && (
        <SignupScreen gotToSingIn={() => setIsHaveAccuont(false)} />
      )}
    </>
  );
}
