import React, {useState} from 'react';
import SigninScreen from './SigninScreen';
import SignupScreen from './SignupScreen';

interface AuthProps {
  signedupUser: (newUser: any) => void;
  signedinUser: (user: any) => void;
}

const Auth: React.FC<AuthProps> = (props: AuthProps) => {
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
        <SignupScreen
          signedupUser={props.signedupUser}
          goToSignIn={() => setIsHaveAccuont(false)}
        />
      )}
    </>
  );
}

export default Auth;
