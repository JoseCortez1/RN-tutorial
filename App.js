import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground} from 'react-native';
import CarItem from './components/CarItem'

export default function App() {

  return (
      <View style={styles.container}>
        <CarItem />
      </View>
  );
}


/**
 *  Styles is a component from RN for give a styling like CSS
 * but is not CSS
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
