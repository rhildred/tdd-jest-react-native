import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import firebase from 'firebase/app';
import database from 'firebase/database';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBPxZ86IT1COx9jsrZsQ_twY1xP6yOWg-c",
  authDomain: "rnhprog81102018.firebaseapp.com",
  databaseURL: "https://rnhprog81102018.firebaseio.com",
  projectId: "rnhprog81102018",
  storageBucket: "rnhprog81102018.appspot.com",
  messagingSenderId: "120108595303"
};
firebase.initializeApp(config);

export default class App extends React.Component {
  oTodos = {};
  constructor(props) {
    super(props);
    this.state = { todo: '' };
    fetch("https://rnhprog81102018.firebaseio.com/tasks.json")
    .then((oData) =>{
      oData.json().then((data) => this.oTodos = data);
    }

    )
    .catch((err) => {
      console.log(err);
    }

    );
  }

  updateText(event) {
    //    console.log(this.state);
    //    alert("text box: " + this.state.todo);
    this.aTodos.push(this.state.todo);
    let taskID = Math.floor(Math.random() * 1000);
    firebase.database().ref('tasks/' + taskID).set({
      name: this.state.todo
    });
    this.setState({ todo: "" });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Rich, open up src/App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        {
          Object.keys(this.oTodos).map((key, i) => {
            return (<Text key={i}>{this.oTodos[key]}</Text>)
          })

        }
        <TextInput
          ref='todo'
          style={{ height: 40 }}
          placeholder="Type your text here!"
          value={this.state.todo}
          onChangeText={(text) => this.setState({ todo: text })}
          onSubmitEditing={() => this.updateText()}
          autoFocus={true}
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
