import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from '../screen/auth/Auth';
import {loginUser, logoutUser, selectUser} from '../store/slices/authSlice';
 import {useSelector} from 'react-redux';
import MainNavigator from './MainNavigator';
const Stack = createNativeStackNavigator();
function Navigator() {
  const user = useSelector(selectUser);
  return (
    <NavigationContainer>
      {user.token ? <MainNavigator /> : <Auth />}
    </NavigationContainer>
  );
}
export default Navigator;
Object.assign({},)