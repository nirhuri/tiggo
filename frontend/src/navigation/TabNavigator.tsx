import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Text, View} from 'react-native';
import {COLORS} from '../Colors';
import TabCartButton from '../Components/TabCartButton';
import { HomeScreen } from '../screen/Home/HomeScreen';

// import Feather from 'react-native-vector-icons/Feather';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import AntDesign from 'react-native-vector-icons/AntDesign';


function CartScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
function BrowseScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}
function AccountScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
function GroceryScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.activeTintColor,
        tabBarInactiveTintColor: COLORS.inActiveTintColor,
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          paddingTop: 10,
          paddingBottom: 10,
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        // options={{
        //   tabBarIcon: ({color, size}) => (
        //     // <Ionicons name="home" color={color} size={size} />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Browse"
        component={BrowseScreen}
        // options={{
        //   tabBarIcon: ({color, size}) => (
        
        //   ),
        // }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        // options={({navigation}) => ({
        //   tabBarButton: () => (
          
        //   ),
        // })}
      />
      <Tab.Screen
        name="Grocery"
        component={GroceryScreen}
        // options={{
        //   tabBarIcon: ({color, size}) => (
           
        //   ),
        // }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        // options={{
        //   tabBarIcon: ({color, size}) => (
           
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
