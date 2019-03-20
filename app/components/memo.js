import * as React from 'react';
import {
  Alert,
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  Linking
} from 'react-native';

// You can import from local files

// or any pure javascript modules available in npm

// var memos = ["first memo", "second memo", "third memo"]
var memos = [];
var today = new Date();

export default class App extends React.Component {
  state = { appText: '' ,
longitude:this.props.navigation.getParam('longitude', -1),
latitude:this.props.navigation.getParam('latitude',-1)};

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  writeText = text => {
    this.setState({
      appText: text,
    });
  };

  onButtonPress = () => {
    this.writeText(this.state.text);
    this.setState({
      text: '',
    });
    memos.push(this.state.text);
    today = new Date();
  };
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
      <View style={styles.container}>
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
          placeholder="Enter memo..."
          clearButtonMode="always"
        />

        <Button
          onPress={this.onButtonPress}
          title="Submit"
          color="#26C6DA"
          accessibilityLabel="Submit memo"
        />

        <Text style={styles.titleStyle}>Previous Memos</Text>

        <ScrollView style={styles.scrollStyle}>
          {memos.map((item, key) => (
            <Text
              key={key}
              style={styles.textStyle}>
              {today.toLocaleDateString('en-US')} -{' '}
              {today.toLocaleTimeString('en-US')} {'\n'}
              {item}
              {'\n'}
          <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('http://maps.google.com/maps?q='+this.state.latitude+","+this.state.longitude)}>
  Location
</Text>
            </Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 120,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  textStyle: {
    padding: 10,
    textAlign: 'center',
  },

  titleStyle: {
    padding: 10,
    paddingTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  scrollStyle: {
    borderWidth: 1,
    borderColor: 'black',
  },
});