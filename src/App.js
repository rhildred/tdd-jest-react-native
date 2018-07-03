import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class App extends React.Component {


  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text>make an app that consumes the HST object here</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: "90%",
    margin: "auto"
  }});
