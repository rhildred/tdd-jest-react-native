import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {
  aTodos = [];
  constructor(props) {
    super(props);
    this.state = {todo: ''};
  }

  updateText(event){
//    console.log(this.state);
//    alert("text box: " + this.state.todo);
    this.aTodos.push(this.state.todo);
    this.setState({todo: ""});
    this.refs['todo'].focus();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Rich, open up src/App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        {
        this.aTodos.map((prop, i)=>{
          return(<Text key={i}>{prop}</Text>)
        })

      }
        <TextInput
        ref='todo'
          style={{height: 40}}
          placeholder="Type your text here!"
          value={this.state.todo}
          onChangeText={(text) => this.setState({todo: text})}
          onSubmitEditing={() => this.updateText()}
          autoFocus = {true}
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
