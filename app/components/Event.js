import React, { Component } from 'react';
import { Text, TouchableOpacity, View ,Switch} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class DateTimePickerTester extends Component {
  constructor(props){
    super(props);
    
  this.state = {
   time :undefined,
    text : this.props.text,
    switchValue:false,
    isDateTimePickerVisible: false,
  };
}
 

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this.setState({time:date.toLocaleString()});
    this._hideDateTimePicker();
  };
toogleSwitch =(value)=>
{
  this.setState({switchValue:value});
}
  render () {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this._showDateTimePicker}>
          <Text>{this.state.text}</Text>
          {this.state.time !==undefined ?(<Text>{this.state.time}</Text>):null}
          
          <Switch
         onValueChange = {this.toogleSwitch}
         value = {this.state.switchValue}/>
        </TouchableOpacity>
        <DateTimePicker
          mode="datetime"
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    );
  }

}