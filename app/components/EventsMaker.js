

import React, { Component } from "react";
import { Text, TouchableOpacity, View,Button,FlatList,Linking } from "react-native";
import Dialog from "react-native-dialog";
 import Event from "./Event";
export default class DateTimePickerTester extends Component {
  
  constructor(props){
    super(props);
    
  this.state = {
    dialogVisible: false,
    text : "",
    listOfEvents:[],
    id:0
,longitude:this.props.navigation.getParam('longitude', -1),
latitude:this.props.navigation.getParam('latitude',-1)

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
    this.setState({id:this.state.id++,dialogVisible:false,listOfEvents:this.state.listOfEvents.concat([this.state.text])});
  }

  static navigationOptions = ({ navigation, navigationOptions }) => {
    console.log(navigationOptions);
    // Notice the logs ^
    // sometimes we call with the default navigationOptions and other times
    // we call this with the previous navigationOptions that were returned from
    // this very function
    return {
      headerTitle: <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://maps.google.com/maps?q='+navigation.getParam('latitude', 'A Nested Details Screen')+","+navigation.getParam('longitude', 'A Nested Details Screen'))}>
  Where am I?
</Text>
    };
  };
  render() {
    return (
      <View>
       <Button onPress={this.showDialog}
        title="Add me">

       </Button>
       
       <FlatList
          data={this.state.listOfEvents}
          renderItem={({item}) => <Event id={this.state.id} text={this.state.text}></Event>}
        />
        
        <Dialog.Container visible={this.state.dialogVisible}>
          <Dialog.Title>Event</Dialog.Title>
          <Dialog.Input           placeholder="Enter"
 label="Name" onChangeText={(email ) => this.textChange(email)}
      />
          <Dialog.Button label="Cancel" onPress={this.handleCancel} />
          <Dialog.Button label="Ok" onPress={this.submitText} />
        </Dialog.Container>
      </View>
    );
  }
}