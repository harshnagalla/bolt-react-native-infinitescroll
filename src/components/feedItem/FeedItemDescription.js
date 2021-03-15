import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default ({userName, description}) => {
  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.username}>{userName}</Text>
      <Text style={{flex: 1}}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    marginTop: 10,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 13,
    marginRight: 5,
  },
});
