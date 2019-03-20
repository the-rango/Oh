import React, {Component} from 'react';
import {AppRegistry, Text, View,TouchableOpacity,Alert,Image, Navigator,Linking} from 'react-native';
import {CameraKitCamera,CameraKitCameraScreen} from 'react-native-camera-kit';
// import Permissions from 'react-native-permissions'

export default class myapp extends  React.Component
{
  constructor(props){
    super();
     this.state ={
      
    image : [{image:'/storage/emulated/0/Pictures/1551589038828.jpg'}]
    }
  }

 
   onCheckCameraAuthoPressed = async()=> {
    const isCameraAuthorized = await CameraKitCamera.checkDeviceCameraAuthorizationStatus();
  console.log("please", isCameraAuthorized);
  }

  onBottomButtonPressed = (event)=> {

    const captureImages=   JSON.stringify(event);
    console.log("dxxxxxxxxxxxxxxxxx");

    console.log(event,"ddddddddddddddddddd");
    console.log(event.type,"ddddddddddddddddddd");

    console.log("dddsssssssssdddddddddddddddd");

   this.setState({image:event.captureImages[0].uri});

   this.props.navigation.navigate("Image",{path:this.state.image});
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
  render()
  {
   
    return(

        <CameraKitCameraScreen actions={{  leftButtonText: 'Cancel' }}
        onBottomButtonPressed={  (event) =>  this.onBottomButtonPressed(event)}
        flashImages={{
          on: require('./images/flashOn.png'),
          off: require('./images/flashOff.png'),
          auto: require('./images/flashAuto.png')
        }}
        cameraFlipImage={require('./images/cameraFlipIcon.png')}
        captureButtonImage={require('./images/cameraButton.png')}>
      </CameraKitCameraScreen>
    );

  }
}

