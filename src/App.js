import React from 'react';
import { StyleSheet, Text, View, TextInput, YellowBox } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/database';

import _ from 'lodash';



YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};


// Initialize Firebase
var config = {
  apiKey: "yours",
  authDomain: "yours",
  databaseURL: "yours",
  projectId: "yours",
  storageBucket: "yours",
  messagingSenderId: "yours"
};
firebase.initializeApp(config);

export default class App extends React.Component {
  oTodos = {};
  constructor(props) {
    super(props);
    this.state = { todo: '' };
    this.getFromFirebase();
  }

  getFromFirebase() {
    fetch(config.databaseURL + "/tasks.json")
      .then((oData) => {
        oData.json().then((data) => {
          if (data) {
            this.oTodos = data;

          }
          this.setState({ todo: "" });
        }).catch((err) => {
          console.log(err);
        });

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
    let taskID = Math.floor(new Date() / 1000);
    firebase.database().ref('tasks/' + taskID).set({
      name: this.state.todo
    }).then(() => {
      this.getFromFirebase();
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          ref='todo'
          style={styles.currentTodo}
          placeholder="Type your text here!"
          value={this.state.todo}
          onChangeText={(text) => this.setState({ todo: text })}
          onSubmitEditing={() => this.updateText()}
          autoFocus={true}
          blurOnSubmit={false}
        />
        <Text>Type your todo above</Text>
        <View style={styles.todos}>
          {
            Object.keys(this.oTodos).reverse().map((key) => {
              return (<Text key={key}>{this.oTodos[key].name}</Text>)
            })
          }
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
  },
  currentTodo: {
    marginTop: 20,
    height: 40
  },
  todos: {
    "marginTop": 20,
  }
});
