import React, { Component } from 'react';


import {
  Platform,
  AppRegistry,
  View,
  Button,
  Alert,
  Text,
  StyleSheet,
  Linking,
  TextInput,
ImageBackground
} from 'react-native';

export default class Myproject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      text:""
    };

  }
 

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    setInterval(
      function() {
        this.setState({
          curDate: new Date().toDateString(),
          curTime: new Date().toLocaleTimeString(),
        });
      }.bind(this),
      1000
    );
  }
  state = { curTime: null };
  
  render() {
    return (
      <View style={{ flex: 2, justifyContent: 'center', margin: 15, backgroundColor: '#fffff0' }}>
  
        <Text
          style={{
            fontSize: 16,
            textAlign: 'right',
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            color: 'saddlebrown',
          }}>
          {'\n'}
          {this.state.curDate}
          {'\n'}
          {this.state.curTime}
          {'\n'}
          <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://maps.google.com/maps?q='+this.state.latitude+","+this.state.longitude)}>
  Where am I?
</Text>
        </Text>

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            justifyContent: 'center',
            textAlign: 'center',
          }}>
          Hello User! {'\n'}Welcome to Oh! {'\n'}
        </Text>
        <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            textAlign: 'center',
            marginBottom: 4,
          }}
          clearTextOnFocus="true"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          placeholder="Search..."
          clearButtonMode="always"
        />

        <Button
          onPress={()=>{this.props.navigation.navigate('BEZOS',{latitude: this.state.latitude,
            longitude: this.state.longitude})}}
          title="Submit"
          color="#DB4437"
          accessibilityLabel="Search"
        />
        <View style={{ marginTop: 15, fontSize: 50 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Memo',{latitude: this.state.latitude,
              longitude: this.state.longitude})}
            title="Memo"
            color="#9acd32"
          />
        </View>

        <View style={{ marginTop: 15 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Event',{latitude: this.state.latitude,
              longitude: this.state.longitude})}
            title="Event"
            color="#66cdaa"
          />
        </View>

        <View style={{ marginTop: 15 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Location')}
            title="Map"
            color="#708090"
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Record',{latitude: this.state.latitude,
              longitude: this.state.longitude})}
            title="Record Yourself"
            color="#ee42f4"
          />
        </View>
        <View style={{ marginTop: 15 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Cameras',{latitude: this.state.latitude,
              longitude: this.state.longitude})}
            title="Camera"
            color="#4286f4"
          />
       
        </View>
      </View>
    );
  }
}

