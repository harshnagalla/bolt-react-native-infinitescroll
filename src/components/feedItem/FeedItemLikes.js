import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default ({likesCount}) => {
  return (
    <View
      onPress={() => console.log('Pressed Post Likes')}
      style={styles.likesContainer}>
      <Text style={styles.likesText}>{likesCount} likes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  likesContainer: {
    marginLeft: 15,
    marginTop: 10,
  },
  likesText: {
    fontWeight: 'bold',
  },
});
