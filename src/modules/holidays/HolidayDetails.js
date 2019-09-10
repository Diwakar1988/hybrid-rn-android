import React from 'react';
import {Button,NativeModules, StyleSheet, Text, View,BackHandler} from 'react-native';

export class HolidayDetails extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Holidays Details</Text>
        <Text style={styles.hello}>Data: {this.props.data}</Text>
        <Button
          title="Launch ACME Native Screen"
          onPress={() => {
            NativeModules.Generic.launchACME();
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
