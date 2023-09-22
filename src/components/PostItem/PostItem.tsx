import React from 'react';
import { Text, View } from 'react-native';
import { Post } from '../../models/Post.response';
import styles from './PostItem.styles';

type PostItemTypes = {
  item: Post;
};

export const PostItem = ({ item }: PostItemTypes) => {
  return (
    <View style={styles.viewPostItem}>
      <Text style={styles.textPostTitle}>{item?.title ?? ''}</Text>
      <Text style={styles.textBody}>{item?.body ?? ''}</Text>
    </View>
  );
};
