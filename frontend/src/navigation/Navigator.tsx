import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from '../screen/auth/Auth';
import {signupUser} from '../store/slices/authSlice';
import MainNavigator from './MainNavigator';
const Stack = createNativeStackNavigator();

function Navigator() {
  const [isAuthed, setIsAuthed] = useState(false);
  const dispatch = useDispatch();

  const signedupUser = (newUser: any) => {
    dispatch(signupUser(newUser));
    setIsAuthed(true);
  };

  const signedinUser = (loggedUser: any) => {
    console.log(loggedUser);
    setIsAuthed(true);
  };

  return (
    <NavigationContainer>
      {isAuthed ? (
        <MainNavigator />
      ) : (
        <Auth signedinUser={signedinUser} signedupUser={signedupUser} />
      )}
    </NavigationContainer>
  );
}
export default Navigator;
Object.assign({});
