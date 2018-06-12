import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todo: ''};
  }

  updateText(event){
    alert("text box: " + this.state.todo);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Rich, open up src/App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Type your text here!"
          value={this.state.todo}
          onChangeText={(text) => this.setState({todo: text})}
          onSubmitEditing={() => this.updateText()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
