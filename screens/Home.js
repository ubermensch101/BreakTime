import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";
import { TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";


class Home extends Component {
  constructor(props) {
    super(props);

    global.activity_list_2=[];
    global.activity_list_5=[];
    global.activity_list_10=[];
    global.activity_list_30=[];
    global.activity_list_60=[];
    global.activity_list_120=[];

    this.state={
      time: "2" //this is initially set to 2 because the picker doesn't register change until movement occurs
    }

  }

  async componentDidMount() {

    //make a function called load_activity_lists()

    try {
      const temp_activity_list_2=await AsyncStorage.getItem('@activity_list_2');
      if(temp_activity_list_2!=null)  {
        global.activity_list_2=JSON.parse(temp_activity_list_2);
      }
    }
    catch(error) {
      console.log("Hi. Error.");
    }
    try {
      const temp_activity_list_5=await AsyncStorage.getItem('@activity_list_5');
      if(temp_activity_list_5!=null)  {
        global.activity_list_5=JSON.parse(temp_activity_list_5);
      }
    }
    catch(error) {
      console.log("Hi. Error.");
    }
    try {
      const temp_activity_list_10=await AsyncStorage.getItem('@activity_list_10');
      if(temp_activity_list_10!=null)  {
        global.activity_list_10=JSON.parse(temp_activity_list_10);
      }
    }
    catch(error) {
      console.log("Hi. Error.");
    }
    try {
      const temp_activity_list_30=await AsyncStorage.getItem('@activity_list_30');
      if(temp_activity_list_30!=null)  {
        global.activity_list_30=JSON.parse(temp_activity_list_30);
      }
    }
    catch(error) {
      console.log("Hi. Error.");
    }
    try {
      const temp_activity_list_60=await AsyncStorage.getItem('@activity_list_60');
      if(temp_activity_list_60!=null)  {
        global.activity_list_60=JSON.parse(temp_activity_list_60);
      }
    }
    catch(error) {
      console.log("Hi. Error.");
    }
    try {
      const temp_activity_list_120=await AsyncStorage.getItem('@activity_list_120');
      if(temp_activity_list_120!=null)  {
        global.activity_list_120=JSON.parse(temp_activity_list_120);
      }
    }
    catch(error) {
      console.log("Hi. Error.");
    }

    global.stored_activity_list=[
      {"activity": "Listen to that new song"},
      {"activity": "Send that text"},
      {"activity": "Check out your calendar"},
      {"activity": "Check out that new song from that artist"},
      {"activity": "Write a note to your future self"},
      {"activity": "Call your parents"},
    ]
  }

  render() {

    return(
      <View style={styles.screen}>

        <View style={{height: "35%", justifyContent: "center", alignItems: "center"}}>
          <Text style={styles.time_text}>
            How much time do I have?
          </Text>
        </View>

        <Picker
          selectedValue={this.state.time}
          onValueChange={(value, index) => this.setState({time: value})}
          mode="dropdown"
          style={styles.picker}
          itemStyle={{color: "white"}}
        >
          <Picker.Item label="2 minutes" value="2"/>
          <Picker.Item label="5 minutes" value="5"/>
          <Picker.Item label="10 minutes" value="10"/>
          <Picker.Item label="30 minutes" value="30"/>
          <Picker.Item label="1 hour" value="60"/>
          <Picker.Item label="2 hours" value="120"/>
        </Picker>

        <View style={{height: "20%", width: "75%", justifyContent: "center", alignItems: "center"}}>
          <TouchableOpacity style={styles.shuffle_button} onPress={() => this.props.navigation.navigate('Activities', {time: this.state.time})}>
              <Text style={styles.shuffle_text}>
                Choose your activity
              </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.choose_activity_view}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('Activities', {time: ""})}>
            <Text style={styles.choose_activity_text_underline}>
              Or let us choose for you
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    height: "100%",
  },
  view_container: {
    justifyContent: "center",
    alignItems: "center",
  },
  time_text: {
    fontSize: 40,
    textAlign: "center",
    maxWidth: "90%",
    color: "white",
  },
  picker: {
    height: "30%",
    top: "-5%",
    width: "80%",
    padding: 10,
    borderWidth: 0,
    borderColor: "#666",
    backgroundColor: "#000000"
  },
  shuffle_button: {
    backgroundColor:"#393939",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "40%",
    borderRadius: 60,
  },
  shuffle_text: {
    fontSize: 24,
    color: "white",
  },
  choose_activity_view: {
    height: "15%",
    top: "-2%",
    flexDirection: "row",
  },
  choose_activity_text_underline: {
    fontSize: 16,
    textDecorationLine: "underline",
    color: "white",
  },
});