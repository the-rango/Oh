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

  componentDidMount()
  {
    var path = this.props.navigation.getParam('path', -1);
    var c =({name:"quan",image:{uri:"file://"+path}});
    var d ={
      mark: imageList.mark,
      bezos :imageList.bezos
    }
    console.log("dsdsadsa",d);

    if(path !==-1)
    this.setState({imageList:
     {
      mark: imageList.mark,
      bezos :imageList.bezos,
      quan: {uri:"file://"+path}
     }},()=>{
        console.log("dsdsadsa",this.state.imageList);
      });
  }

  render()
  {
   
  console.log("ddddddddddddddddddddd",this.state.imageList);
    return(
<View>
  

  <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to search!"
          onChangeText={(text) => this.setState({text})}
        />
        <Button
  onPress={() => {
 
   this.setState({image:0})
   
  }}
  title="Search"
/>


{this.state.text.length>0?( <Card
  title={this.state.text}
  image={ this.state.imageList[this.state.text]}>
  
</Card>):undefined}
      
</View>
</View>
    );

  }
}


