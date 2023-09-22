import { useNavigation } from '@react-navigation/core';
import { RouteProp, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { fetchPostsByUser } from '../../api/post';
import { fetchSingleUser } from '../../api/user';
import { PostItem } from '../../components/PostItem/PostItem';
import { Post } from '../../models/Post.response';
import { RootStackParamList } from '../../navigators';
import styles from './UserDetails.styles';

export function UserDetails({}): JSX.Element {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'UserDetails'>>();

  const userId = route.params?.id ?? '';

  // const dynamicQueries = useQueries({
  //   queries: [
  //     {
  //       queryKey: ['users', userId],
  //       queryFn: () => fetchSingleUser(userId),
  //     },
  //     {
  //       queryKey: ['posts', userId],
  //       queryFn: () => fetchPostsByUser(userId),
  //     },
  //   ],
  // });

  const usersQuery = useQuery({
    queryKey: ['users', userId],
    queryFn: () => fetchSingleUser(userId),
    placeholderData: {
      firstName: 'First name',
      lastName: 'Last name',
      email: 'user@email.com',
    },
  });

  const teamsQuery = useQuery({
    queryKey: ['posts', userId],
    queryFn: () => fetchPostsByUser(userId),
    enabled: usersQuery.data.id !== undefined,
  });

  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>{'User Details'}</Text>
        <TouchableOpacity
          style={styles.btnAddUser}
          onPress={() => navigation.goBack()}>
          <Text style={styles.textAddUser}>{'Go Back'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewDetails}>
        <View style={styles.viewImagePlaceHolder}>
          <Text style={styles.textPlaceholder}>
            {usersQuery.data?.firstName.charAt(0) +
              '' +
              usersQuery.data?.lastName.charAt(0)}
          </Text>
        </View>
        <View style={styles.viewUserItem}>
          <View>
            <Text
              style={
                styles.textName
              }>{`${usersQuery.data?.firstName} ${usersQuery.data?.lastName}`}</Text>
            <Text style={styles.textName}>{usersQuery.data?.email}</Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View>
          {teamsQuery.data?.posts.map((item: Post, index: number) => {
            return <PostItem item={item} key={index} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
}
