import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { fetchUsers } from '../../api/user';
import { UserItem } from '../../components/UserItem/UserItem';
import { UsersData } from '../../mocks/users';
import { User } from '../../models';
import { RootStackParamList } from '../../navigators';
import styles from './Users.styles';

function UsersList(): JSX.Element {
  const { data, isLoading, isFetching, refetch, failureCount, failureReason } =
    useQuery({
      queryKey: ['users'],
      queryFn: () => fetchUsers(20, 0),
      placeholderData: UsersData,
      retry: 5,
      retryDelay: 1000,
    });

  console.log('failureCount', failureCount, failureReason);

  return (
    <FlatList
      ListHeaderComponent={
        <View>
          {isLoading && (
            <ActivityIndicator size={'small'} color={Colors.darker} />
          )}
        </View>
      }
      refreshControl={
        <RefreshControl refreshing={isFetching} onRefresh={refetch} />
      }
      contentContainerStyle={styles.listView}
      data={data?.users ?? []}
      renderItem={({ item, index }) => <UserItem key={index} item={item} />}
      keyExtractor={(item: User, index: number) => index.toString()}
    />
  );
}

export function Users({}): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>{'Users'}</Text>
        <TouchableOpacity
          style={styles.btnAddUser}
          onPress={() => navigation.navigate('AddUser')}>
          <Text style={styles.textAddUser}>{'Add User'}</Text>
        </TouchableOpacity>
      </View>
      <UsersList />
    </View>
  );
}
