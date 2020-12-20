import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log("Welcome!!!");
  return (
    <View style={styles.container}>
      <Text>Welcome to my first React Native App!</Text>
      <Button title="My First Button" icon={{ name: "code"}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
