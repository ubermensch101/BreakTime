import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { TouchableOpacity, Button } from "react-native";


class Activities extends Component {

    constructor(props) {
        super(props);
        this.state={
            activity: "",
            time: this.props.route.params.time,
            index: 0,
        }
    }

    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('focus', ()=>{this.new_activity()});
    }

    random_activity = (cur_activity_list=[]) => {
        if(cur_activity_list.length==0) {
            this.setState({activity: "Please set an activity list from the customise section"});
        }
        else {
            var num = Math.floor(Math.random() * cur_activity_list.length);
            this.setState({activity: cur_activity_list[num]["activity"], index: num});
        }
    }

    next_activity = (cur_activity_list=[]) => {
        if(cur_activity_list.length==0) {
            this.setState({activity: "Please set an activity list from the customise section"});
        }
        else {
            this.state.index=(this.state.index+1)%cur_activity_list.length;
            this.setState({activity: cur_activity_list[this.state.index]["activity"], index: this.state.index});
        }
    }

    new_activity = () => {
        var choice=this.state.time;
        switch(choice) {
            case "2":
                this.random_activity(global.activity_list_2);
                break;
            case "5":
                this.random_activity(global.activity_list_5);
                break;
            case "10":
                this.random_activity(global.activity_list_10);
                break;
            case "30":
                this.random_activity(global.activity_list_30);
                break;
            case "60":
                this.random_activity(global.activity_list_60);
                break;
            case "120":
                this.random_activity(global.activity_list_120);
                break;
            default:
                this.random_activity(global.stored_activity_list);
                break;
        }
    }

    update_activity = () => {
        var choice=this.state.time;
        switch(choice) {
            case "2":
                this.next_activity(global.activity_list_2);
                break;
            case "5":
                this.next_activity(global.activity_list_5);
                break;
            case "10":
                this.next_activity(global.activity_list_10);
                break;
            case "30":
                this.next_activity(global.activity_list_30);
                break;
            case "60":
                this.next_activity(global.activity_list_60);
                break;
            case "120":
                this.next_activity(global.activity_list_120);
                break;
            default:
                this.next_activity(global.stored_activity_list);
                break;
        }
    }

    go_to_customise = () => {
        if(this.state.time!="") {
            this.props.navigation.navigate('Change_Activities', {time: this.state.time});
        }
    }

    go_to_timer = () => {
        //do something about the check mark situation
        if(this.state.time!="") {
            this.props.navigation.navigate('Timer', {time: this.state.time, activity: this.state.activity});
        }
    }

    render() {

        return (
            <View style={styles.screen}>

                <View style={{height: "30%", justifyContent: "center", alignItems: "center"}}>
                    <Text style={styles.suggestion_text}>
                        A suggestion:
                    </Text>
                </View>

                <View style={{height: "30%", justifyContent: "center", alignItems: "center"}}>
                    <Text style={styles.activity_text}>
                        {this.state.activity}
                    </Text>
                </View>

                <View style={{height: "40%", width: "100%", justifyContent: "center", alignItems: "center"}}>
                    <View style={styles.button_container}>
                        <TouchableOpacity
                            style={styles.reject_button}
                            activeOpacity={0.8}
                            onPress={this.update_activity}
                        >
                            <View style={styles.reject_button_container}>
                                <Image source={require('../assets/Reject.png')} style={styles.reject_button_image}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.accept_button}
                            activeOpacity={0.8}
                            onPress={this.go_to_timer}
                        >
                            <View style={styles.accept_button_container}>
                                <Image source={require('../assets/Accept.png')} style={styles.accept_button_image}/>
                            </View>
                        </TouchableOpacity>
                        
                    </View>
                </View>

                <View style={styles.customise_text_view}>
                    <Text style={{color: "white"}}>
                        Want to add your own activities?{' '}
                    </Text>
                    <TouchableOpacity onPress={this.go_to_customise}>
                        <Text style={{textDecorationLine:'underline', color: "white"}}>
                            Customise
                        </Text>
                    </TouchableOpacity>
                </View>   
            </View>
        );
    }
}

export default Activities;

const styles= StyleSheet.create({
    screen: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        height: "100%",
    },
    suggestion_text: {
        fontSize: 40,
        textAlign: "center",
        color: "white",
    },
    activity_text: {
        maxWidth: "90%",
        fontSize: 35,
        textAlign: "center",
        color: "white",
    },
    button_container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },
    accept_button: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        left:"0%",
    },
    reject_button: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
        right: "0%",
    },
    accept_button_container: {
        width: "50%",
        height: "48%",
        borderRadius: "25%",
    },
    reject_button_container: {
        width: "40%",
        height: "48%",
        borderRadius: "24%",
    },
    accept_button_image: {
        width: "100%",
        height: "100%",
    },
    reject_button_image: {
        width: "100%",
        height: "100%",
    },
    customise_text_view: {
        bottom: "15%",
        flexDirection: "row",
    },
})
