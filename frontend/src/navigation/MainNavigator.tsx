import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {COLORS} from '../Colors';
import SelectOrder from '../screen/selectOrder/SelectOrder';
import MainTabNavigator from './TabNavigator';
import {HomeScreen} from '../screen/Home/HomeScreen';

const Stack = createNativeStackNavigator();

function DetailsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
    </View>
  );
}
function MainNavigator() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="HomeScreen" component={MainTabNavigator} />
      <Stack.Screen
        name="SelectOrder"
        component={SelectOrder}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: COLORS.Primary,
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      /> */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: COLORS.Primary,
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}
export default MainNavigator;
