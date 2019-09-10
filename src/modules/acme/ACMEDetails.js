import React from 'react';
import {StyleSheet, Text, View, } from 'react-native';

export class ACMEDetails extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>ACME Details</Text>
        <Text style={styles.hello}>Data: {this.props.data}</Text>
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
