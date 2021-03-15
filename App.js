import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Feed from './src/components/Feed';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Feed />
    </SafeAreaView>
  );
};

export default App;
