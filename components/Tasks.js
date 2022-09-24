import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Task extends Component{
  render() {
    return (
      <View key={this.props.keyval} style={styles.item}>
        <View style={styles.itemLeft}>
          <TouchableOpacity style={styles.remove_sign} activeOpacity={1} onPress={this.props.delete_activity}/>
          <Text style={styles.itemText}>{this.props.val.activity.toString()}</Text>
        </View>
        <View style={styles.circular}></View>
      </View>     
    );
  }
}


export default Task;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    //top: 200,
    marginLeft: 20,
    marginRight: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap'
  },
  remove_sign: {
    width: 24,
    height: 24,
    backgroundColor: '#55BCF6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
    color: 'white',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});
