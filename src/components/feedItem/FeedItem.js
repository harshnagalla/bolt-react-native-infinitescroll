import {View} from 'react-native';
import React from 'react';
import FeedItemHeader from './FeedItemHeader';
import FeedItemImage from './FeedItemImage';
import FeedItemLikes from './FeedItemLikes';
import FeedItemDescription from './FeedItemDescription';

export default ({item}) => {
  const {user, urls, description, likes} = item;
  const {profile_image, username, location} = user;
  return (
    <View style={{marginBottom: 10}}>
      <FeedItemHeader
        profileUri={profile_image.small}
        userName={username}
        location={location}
      />
      <FeedItemImage feedImageUri={urls.regular} />
      <FeedItemLikes likesCount={likes} />
      {description && (
        <FeedItemDescription description={description} userName={username} />
      )}
    </View>
  );
};
