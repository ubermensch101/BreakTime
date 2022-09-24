import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Image, Vibration, Button } from "react-native";
import { StackActions } from "@react-navigation/native";
import TimerCountDown from "../components/TimerCountDown";
import withAnimation from "react-native-progress/withAnimation";
import { TouchableOpacity } from "react-native-gesture-handler";

class Activities_Timer extends Component {

    constructor(props) {
        super(props);
        this.state={
            activity: this.props.route.params.activity,
            time: this.props.route.params.time,
            duration_left: 60*parseInt(this.props.route.params.time)
        }
        this.go_back_to_home=this.go_back_to_home.bind(this);
    }

    start_vibration() {
        //alert("Finished!");
        Vibration.vibrate([400], true);
    }

    go_back_to_home() {
        Vibration.cancel();
        this.props.navigation.dispatch(StackActions.pop(1));
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={{height: "30%", justifyContent: "center", alignItems: "center"}}>
                    <Text style={styles.title}>
                        {this.state.activity}
                    </Text>
                </View>

                <View style={{height: "35%", justifyContent: "center", alignItems: "center"}}>
                    <TimerCountDown
                        initialSecondsRemaining={1000*this.state.duration_left}
                        onComplete={this.start_vibration}
                        formatSecondsRemaining={(milliseconds) => {
                            const remainingSec = Math.round(milliseconds / 1000);
                            const seconds = parseInt((remainingSec % 60).toString(), 10);
                            const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
                            const hours = parseInt((remainingSec / 3600).toString(), 10);
                            const s = seconds < 10 ? '0' + seconds : seconds;
                            const m = minutes < 10 ? '0' + minutes : minutes;
                            let h = hours < 10 ? '0' + hours : hours;
                            h = h === '00' ? '' : h + ':';
                            return h + m + ':' + s;
                        }}
                        allowFontScaling={true}
                        style={styles.timer}
                    />
                </View>

                <View style={{height: "35%", width: "75%", justifyContent: "center", alignItems: "center"}}>
                    <TouchableOpacity style={styles.shuffle_button} onPress={this.go_back_to_home} activeOpacity={0.8}>
                        <Text style={styles.shuffle_text}>
                            End Timer
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

export default Activities_Timer;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black",
        height: "100%",
    },
    title: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: "white",
        top: "10%",
    },
    timer: {
        fontSize: 60,
        color: "white",
        top: "10%",
    },
    shuffle_button: {
        backgroundColor:"#393939",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "75%",
        minHeight: "22%",
        width: "100%",
        height: "40%",
        borderRadius: 60,
        
    },
    shuffle_text: {
        fontSize: 24,
        color: "white",
    },
});