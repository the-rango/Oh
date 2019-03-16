import React, { Component } from 'react';
import { Text, TouchableOpacity, View ,Switch} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import NotifService from "./notiService"

export default class DateTimePickerTester extends Component {
  constructor(props){
    super(props);
    
  this.state = {
   time :undefined,
    text : this.props.text,
    switchValue:false,
    id :this.props.id,
    date : "",
    isDateTimePickerVisible: true
  };
  this.notif = new NotifService(this.onRegister.bind(this), this.onNotif.bind(this));

}
 
onRegister(token) {
  Alert.alert("Registered !", JSON.stringify(token));
  console.log(token);
  this.setState({ registerToken: token.token, gcmRegistered: true });
}

onNotif(notif) {
  console.log(notif);
  Alert.alert(notif.title, notif.message);
}

showDialog = () => {
  this.setState({ dialogVisible: true });
};

handleCancel = () => {
  this.setState({ dialogVisible: false });
};

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
  
      this.notif.scheduleNotif(date,this.state.id);
      console.log('A date has been picked: ', date);
      this.setState({time:date.toLocaleString(),date:date,switchValue:true});
      this._hideDateTimePicker();
  
  };
toogleSwitch =(value)=>
{
  this.setState({switchValue:value},()=>{
    if(value)
    {
      this.notif.scheduleNotif(this.state.date,this.state.id);
    }
    else
    this.notif.cancelNotif(this.state.id);
  });
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