import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export class HolidaysListing extends React.Component {

  
  constructor(props) {
    super(props);
  }

  componentWillUnmount(){
    console.log("***************** unmount",this)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Holidays Listing</Text>
        <Text style={styles.hello}>Data: {this.props.data}</Text>
        <Button
          title="Launch React Holidays Details"
          onPress={() => {
            Actions.holidayDetails();
          }}
        />
      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
