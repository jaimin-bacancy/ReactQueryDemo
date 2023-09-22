import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppNavigator } from './AppNavigator';

export type RootStackParamList = {
  Users: undefined;
  AddUser: undefined;
  UserDetails: {
    id: any;
  };
};

export function RootNavigator() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
