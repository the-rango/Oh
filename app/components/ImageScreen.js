import React, {Component} from 'react';
import {Button, AppRegistry,StyleSheet, ScrollView,Text, View,TouchableOpacity,Alert,Image, Navigator,FlatList} from 'react-native';
import { State } from 'react-native-gesture-handler';
import {imageList}   from './RequireImage'
import { Card, ListItem, Icon } from 'react-native-elements'

var path ="./images/bezos.jpg";
const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
// more users here
 ]
export default class myapp extends  React.Component
{
  constructor(props){
    super(props);


   this.state ={imageList:
    imageList};
  
  
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


    return(
<ScrollView>
<Button
  onPress={() => {
   
   this.props.navigation.navigate("SearchImage",{path:this.props.navigation.getParam('path', -1)});
  }}
  title="Search"
/>

<FlatList
          data={Object.keys(this.state.imageList)}
          renderItem={({item}) => <Card
          title={item}
          image={this.state.imageList[item]}>
        </Card>}
        />


</ScrollView>
    );

  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
