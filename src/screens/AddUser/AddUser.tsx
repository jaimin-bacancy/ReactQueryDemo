/* eslint-disable @typescript-eslint/no-unused-vars */
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createUser } from '../../api/user';
import { CustomTextInput } from '../../components/CustomTextInput/CustomTextInput';
import styles from './AddUser.styles';

function goBack(navigation: NavigationProp<ReactNavigation.RootParamList>) {
  navigation.goBack();
}

function AddUserForm(): JSX.Element {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const { isLoading, mutate, failureCount, failureReason } = useMutation({
    mutationFn: createUser,
    retry: 5,
    retryDelay: 1000,
    onSuccess: (data, variables, context) => {
      Alert.alert('User created successfully', '', [
        {
          onPress: () => goBack(navigation),
        },
      ]);
    },
    onError: (error, variables, context) => {
      Alert.alert('Something went wrong', error + '');
    },
  });

  console.log('mutateFailureCount', failureCount, failureReason);

  return (
    <View>
      <CustomTextInput
        label={'First Name'}
        placeholder={'Enter first Name'}
        onChangeText={setFirstName}
        value={firstName}
      />
      <CustomTextInput
        label={'Last Name'}
        placeholder={'Enter last name'}
        onChangeText={setLastName}
        value={lastName}
      />
      <CustomTextInput
        label={'Email'}
        placeholder={'Enter email'}
        onChangeText={setEmail}
        value={email}
      />
      <TouchableOpacity
        style={styles.btnSubmit}
        onPress={() => {
          mutate({
            id: new Date().getMilliseconds(),
            firstName,
            lastName,
            email,
          });
        }}>
        {isLoading ? (
          <ActivityIndicator size={'small'} color={Colors.lighter} />
        ) : (
          <Text style={styles.textSubmit}>{'Submit'}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

export function AddUser(): JSX.Element {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>{'Add User'}</Text>
        <TouchableOpacity
          style={styles.btnAddUser}
          onPress={() => goBack(navigation)}>
          <Text style={styles.textAddUser}>{'Cancel'}</Text>
        </TouchableOpacity>
      </View>
      <AddUserForm />
    </View>
  );
}
