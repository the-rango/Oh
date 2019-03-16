import * as React from 'react';
import { Alert, Text, View, StyleSheet, Button, TextInput } from 'react-native';



export default class App extends React.Component {

  state = {appText: 'Testing'}

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  writeText = text => {
    this.setState({
      appText: text
    })
  }

  onButtonPress = () => {
    this.writeText(this.state.text)
    this.setState({
      text: ''
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, textAlign: 'center', marginBottom: 4}}
          clearTextOnFocus = "true"
          onChangeText = {(text) => this.setState({text})}
          value = {this.state.text}
          placeholder = 'Enter memo...'
          clearButtonMode = 'always'
        />
        <Button
          onPress = {this.onButtonPress}
          title = "Submit"
          color = "#26C6DA"
          accessibilityLabel = "Submit memo"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop:10,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});