import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default ({userName, location, profileUri}) => {
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <Image source={{uri: profileUri}} style={styles.personImage} />
        <View>
          <Text style={styles.personName}> {userName} </Text>
          {location && <Text style={styles.placeName}> {location} </Text>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 6,
    marginStart: 10,
    marginEnd: 10,
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  personImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },
  personName: {
    marginStart: 10,
    fontWeight: 'bold',
  },
  placeName: {
    marginStart: 10,
    fontSize: 12,
  },
  iconMore: {
    height: 15,
    width: 15,
  },
});
