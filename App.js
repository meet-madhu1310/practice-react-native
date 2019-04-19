import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import Header from './components/Header'
import NowPlaying from './components/NowPlaying'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Header />
          <NowPlaying />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  }
});
