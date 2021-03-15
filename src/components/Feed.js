import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FeedItem from './feedItem/FeedItem';

export default () => {
  const [feedData, setFeedData] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    fetchFeedData(1, []);
  }, []);

  const fetchFeedData = (index, data) => {
    const clientId =
      '6c446b49b72a4c559d9b9d67183d5c1de1981d16f309063c3b994086e6ce1a26';
    const baseUrl = 'https://api.unsplash.com/';
    axios
      .get(`${baseUrl}photos?page=${index}&client_id=${clientId}`)
      .then(a => {
        console.log('==============Response Data=============', a.data);
        setRefreshing(false);
        setloading(false);
        setPageIndex(index);
        setFeedData([...data, ...a.data]);
      })
      .catch(function (e) {
        console.log('another error happened:' + e.message);
      });
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchFeedData(1, []);
  };

  const renderFooter = () => {
    return (
      //Footer View with Loader
      <View style={styles.footer}>
        {loading ? (
          <ActivityIndicator color="black" style={{margin: 15}} />
        ) : null}
      </View>
    );
  };

  return (
    <View style={styles.feed}>
      <FlatList
        data={feedData}
        renderItem={({item, index}) => (
          <FeedItem
            id={item.id}
            uri={item.urls.full}
            description={item.alt_description}
            item={item}
            key={index}
          />
        )}
        onEndReached={() => {
          setloading(true);
          fetchFeedData(pageIndex + 1, feedData);
        }}
        ListFooterComponent={renderFooter}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  feed: {
    height: Dimensions.get('window').height,
    marginBottom: 10,
  },
});
