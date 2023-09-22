import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { User } from '../../models';
import { RootStackParamList } from '../../navigators';
import styles from './UserItem.styles';

type UserItemTypes = {
  item: User;
};

export const UserItem = ({ item }: UserItemTypes) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateDetails = async () => {
    if (item.id != undefined) {
      navigation.navigate('UserDetails', {
        id: item.id,
      });
    }
  };

  return (
    <TouchableOpacity style={styles.viewUserItem} onPress={navigateDetails}>
      <View style={styles.viewImagePlaceHolder}>
        <Text style={styles.textPlaceholder}>
          {item.firstName.charAt(0) + '' + item.lastName.charAt(0)}
        </Text>
      </View>
      <View>
        <Text
          style={styles.textName}>{`${item.firstName} ${item.lastName}`}</Text>
        <Text style={styles.textName}>{item.email}</Text>
      </View>
    </TouchableOpacity>
  );
};
