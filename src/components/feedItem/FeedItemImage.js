import React, {useState} from 'react';
import {StyleSheet, Dimensions, ActivityIndicator} from 'react-native';
import FastImage from 'react-native-fast-image';

export default ({feedImageUri}) => {
  const [loading, setloading] = useState(false);
  return (
    <FastImage
      source={{uri: feedImageUri}}
      style={styles.postImg}
      onLoadStart={() => {
        setloading(true);
      }}
      onLoadEnd={() => {
        setloading(false);
      }}>
      <ActivityIndicator animating={loading} />
    </FastImage>
  );
};

const styles = StyleSheet.create({
  postImg: {
    height: Dimensions.get('screen').height / 3,
    width: Dimensions.get('screen').width,
    resizeMode: 'contain',
    alignItems: 'center',
  },
});
