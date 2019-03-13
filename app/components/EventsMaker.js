

import React, { Component } from "react";
import { Text, TouchableOpacity, View,Button,FlatList } from "react-native";
import Dialog from "react-native-dialog";
 import Event from "./Event";
export default class DateTimePickerTester extends Component {
  constructor(props){
    super(props);
    
  this.state = {
    dialogVisible: false,
    text : "",
    listOfEvents:[]
  };
}
  showDialog = () => {
    this.setState({ dialogVisible: true });
  };
 
  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };
 

  textChange =(text)=>
  {
  this.setState({text:text});
  console.log("dsdds",text);
  }

  submitText =()=>
  {
    this.setState({dialogVisible:false,listOfEvents:this.state.listOfEvents.concat([this.state.text])});
  }
  render() {
    return (
      <View>
       <Button onPress={this.showDialog}
        title="Add me">

       </Button>
       
       <FlatList
          data={this.state.listOfEvents}
          renderItem={({item}) => <Event text={this.state.text}></Event>}
        />
        
        <Dialog.Container visible={this.state.dialogVisible}>
          <Dialog.Title>Account delete</Dialog.Title>
          <Dialog.Input           placeholder="what do u want!"
 label="Email" onChangeText={(email ) => this.textChange(email)}
      />
          <Dialog.Button label="Cancel" onPress={this.handleCancel} />
          <Dialog.Button label="Ok" onPress={this.submitText} />
        </Dialog.Container>
      </View>
    );
  }
}