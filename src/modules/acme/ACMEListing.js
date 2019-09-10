import React from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
export class ACMEListing extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>ACME Listing</Text>
        <Text style={styles.hello}>Data: {this.props.data}</Text>
        <Button
          title="Launch React ACME Details"
          onPress={() => {
            Actions.acmeDetails();
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
