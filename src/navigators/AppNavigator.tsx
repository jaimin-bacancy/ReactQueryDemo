import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AddUser } from '../screens/AddUser/AddUser';

import { UserDetails } from '../screens/UserDetails/UserDetails';
import { Users } from '../screens/Users/Users';
import { UsersInfinite } from '../screens/UsersInfinite/UsersInfinite';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Users">
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
      <Stack.Screen name="UsersInfinite" component={UsersInfinite} />
      <Stack.Screen name="AddUser" component={AddUser} />
    </Stack.Navigator>
  );
}
