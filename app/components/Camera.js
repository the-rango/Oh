import React from 'react';
import { View, Text, Button } from 'react-native';

export default class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
          <Button
          title="Go to camera"
          onPress={() => 
            this.props.navigation.navigate("Cameras")
          }
          
        />
           <Button
          title="Go image list"
          onPress={() => 
            this.props.navigation.navigate("Image")
          }
          
        />
           <Button
          title="Go Event"
          onPress={() => 
            this.props.navigation.navigate("Event")
          }
          
        />
        </View>
      );
    }  
  }