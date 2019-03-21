import React, {Component} from 'react';
import {FlatList,TextInput,Button, AppRegistry,StyleSheet, Text, View,TouchableOpacity,Alert,Image, Navigator} from 'react-native';
import { SearchBar } from 'react-native-elements';

import { Card, ListItem, Icon } from 'react-native-elements'
import {imageList}   from './RequireImage'

export default class searchimage extends  React.Component
{
  constructor(props){
    super(props);
   this.state={text:"",
   imageList:imageList,
  image :""}
   
  }

 
  render()
  {
   
  console.log("ddddddddddddddddddddd",this.state.imageList);
    return(
<View>
  


<Card
  title={"fun with bezos"}
  image={ this.state.imageList.bezos}>
  <Text style={{marginBottom: 10}}>
   Had a great conversation with him. He offered me a job at Amazon. 
  </Text>
  <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://maps.google.com/maps?q='+navigation.getParam('latitude', 'A Nested Details Screen')+","+navigation.getParam('longitude', 'A Nested Details Screen'))}>
  Where?
</Text>
<Text style={{color: 'green'}}
    >
 The next meeting has been scheduled. Please click here to see more details.
</Text>
</Card>
      

</View>
    );

  }
}


