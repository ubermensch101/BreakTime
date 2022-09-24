import React, {Component, useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Task from "../components/Tasks"

class Change_Activities extends Component {

  constructor(props) {
    super(props);

    var activities_time=this.props.route.params.time;
    var activity_list=[]

    switch(activities_time) {
      case "2":
        activity_list = global.activity_list_2;
        break;
      case "5":
        activity_list = global.activity_list_5;
        break;
      case "10":
        activity_list = global.activity_list_10;
        break;
      case "30":
        activity_list = global.activity_list_30;
        break;
      case "60":
        activity_list = global.activity_list_60;
        break;
      case "120":
        activity_list = global.activity_list_120;
        break;
      default:
        activity_list = global.stored_activity_list;
        break;
    }

    this.state={
      activity: "",
      time: activities_time,
      activity_list: activity_list,
    }
  }

  async handleAddTask() {
    Keyboard.dismiss();
    if((this.state.time=="2" || this.state.time=="5" || this.state.time=="10" || this.state.time=="30" || this.state.time=="60" || this.state.time=="120") && this.state.activity!="") {

      this.state.activity_list.push({activity: this.state.activity});
      this.setState({activity_list: this.state.activity_list, activity: ""});
      switch(this.state.time) {

        case "2":
          try {await AsyncStorage.setItem('@activity_list_2', JSON.stringify(global.activity_list_2));}
          catch(error) {console.log(error);}
          break;
        case "5":
          try {await AsyncStorage.setItem('@activity_list_5', JSON.stringify(global.activity_list_5));}
          catch(error) {console.log(error);}
          break;
        case "10":
          try {await AsyncStorage.setItem('@activity_list_10', JSON.stringify(global.activity_list_10));}
          catch(error) {console.log(error);}
          break;
        case "30":
          try {await AsyncStorage.setItem('@activity_list_30', JSON.stringify(global.activity_list_30));}
          catch(error) {console.log(error);}
          break;
        case "60":
          try {await AsyncStorage.setItem('@activity_list_60', JSON.stringify(global.activity_list_60));}
          catch(error) {console.log(error);}
          break;
        case "120":
          try {await AsyncStorage.setItem('@activity_list_120', JSON.stringify(global.activity_list_120));}
          catch(error) {console.log(error);}
          break;
      }

    }
  }

  async delete_activity(key) {
    if(this.state.time=="2" || this.state.time=="5" || this.state.time=="10" || this.state.time=="30") {

      this.state.activity_list.splice(key, 1);
      this.setState({activity_list: this.state.activity_list});

      switch(this.state.time) {
        case "2":
          try {await AsyncStorage.setItem('@activity_list_2', JSON.stringify(global.activity_list_2));}
          catch(error) {console.log(error);}
          break;
        case "5":
          try {await AsyncStorage.setItem('@activity_list_5', JSON.stringify(global.activity_list_5));}
          catch(error) {console.log(error);}
          break;
        case "10":
          try {await AsyncStorage.setItem('@activity_list_10', JSON.stringify(global.activity_list_10));}
          catch(error) {console.log(error);}
          break;
        case "30":
          try {await AsyncStorage.setItem('@activity_list_30', JSON.stringify(global.activity_list_30));}
          catch(error) {console.log(error);}
          break;
        case "60":
          try {await AsyncStorage.setItem('@activity_list_60', JSON.stringify(global.activity_list_60));}
          catch(error) {console.log(error);}
          break;
        case "30":
          try {await AsyncStorage.setItem('@activity_list_120', JSON.stringify(global.activity_list_120));}
          catch(error) {console.log(error);}
          break;
      }
      
    }
  }

  render() {

    let activity_list=this.state.activity_list.map((val, key) => {
      return <Task key={key} keyval={key} val={val} delete_activity={ () => this.delete_activity(key)} />
    });

    return (
      <View style={styles.container}>
        <View style={{height: "25%", justifyContent: "center", alignItems: "center"}}>
          <Text style={styles.header_task_text}>
            Activities
          </Text>
        </View>

        <View style={{height: "52%", justifyContent: "space-evenly"}}>
          <ScrollView
              contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps='handled'
          >
            { activity_list }
          </ScrollView>
        </View>

        <KeyboardAvoidingView 
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput 
            style={styles.input}
            placeholder={'Add an acitivity'}
            value={this.state.activity}
            textAlignVertical="center"
            onChangeText={(text) => this.setState({activity: text})}
          />

          <TouchableOpacity onPress={() => this.handleAddTask()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>

        </KeyboardAvoidingView>
        
      </View>
    )
  }
}

export default Change_Activities;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
  },
  header_task_text: {
    maxwidth: "90%",
    fontSize: 40,
    textAlign: "center",
    color: "white",
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: "7%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: "60%",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#71DE89",
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
  },
  addText: {
    fontSize: "20",
  },
});