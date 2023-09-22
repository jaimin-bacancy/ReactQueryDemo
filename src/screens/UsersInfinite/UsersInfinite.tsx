import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  InfiniteData,
  useInfiniteQuery,
  useQueryClient,
} from '@tanstack/react-query';
import React, { useState } from 'react';
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
import { User } from '../../models';
import { RootStackParamList } from '../../navigators';
import styles from './UsersInfinite.styles';

const PAGE_SIZE = 20; // Set your desired page size

function UsersList(): JSX.Element {
  const { data, fetchNextPage, hasNextPage, isFetching, refetch } =
    useInfiniteQuery(
      ['users'],
      async ({ pageParam = 0 }) => {
        const skip = pageParam * PAGE_SIZE;
        const response = await fetchUsers(PAGE_SIZE, skip);

        return {
          data: response.users, // Array of users for the current page
          total: response.total, // Total number of items available
          skip,
        };
      },
      {
        getNextPageParam: lastPage => {
          const { total, skip } = lastPage;
          const remaining = total - (skip + PAGE_SIZE);
          return remaining > 0 ? skip / PAGE_SIZE + 1 : undefined;
        },
      },
    );

  const [isRefreshing, setIsRefreshing] = useState(false);
  const queryClient = useQueryClient();

  const handleRefresh = async () => {
    queryClient.setQueryData(
      ['users'],
      (
        cData:
          | InfiniteData<{
              data: any;
              total: any;
              skip: number;
            }>
          | undefined,
      ) => ({
        pages: cData?.pages.slice(0, 1) ?? [],
        pageParams: cData?.pageParams.slice(0, 1) ?? [],
      }),
    );

    setIsRefreshing(true);
    refetch({ refetchPage: (page, index) => index === 0 });
    setIsRefreshing(false);
  };

  const handleLoadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <FlatList
      ListFooterComponent={
        <View>
          {isFetching && (
            <ActivityIndicator size={'small'} color={Colors.darker} />
          )}
        </View>
      }
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
      contentContainerStyle={styles.listView}
      data={data?.pages?.flatMap(page => page.data) ?? []}
      renderItem={({ item, index }) => <UserItem key={index} item={item} />}
      keyExtractor={(item: User, index: number) => index.toString()}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
    />
  );
}

export function UsersInfinite({}): JSX.Element {
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
