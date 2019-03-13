import React, { Component } from 'react';

import {
  Platform,
  AppRegistry,
  View,
  Button,
  Alert,
  Text,
  StyleSheet,
ImageBackground
} from 'react-native';

export default class Myproject extends Component {

  componentWillMount() {
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

        <View style={{ marginTop: 15, fontSize: 50 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Image')}
            title="Take a Picture"
            color="#9acd32"
          />
        </View>

        <View style={{ marginTop: 15 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Details')}
            title="Search"
            color="#66cdaa"
          />
        </View>

        <View style={{ marginTop: 15 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Details')}
            title="Record Yourself"
            color="#708090"
          />
        </View>
      </View>
    );
  }
}

