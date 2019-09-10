import React from 'react';
import {Router, Scene,Actions} from 'react-native-router-flux';
import {BackHandler} from "react-native"
import {ACMEListing} from './ACMEListing';
import {ACMEDetails} from './ACMEDetails';

export const ACMELanding = () => {
  return (
    <Router
      backAndroidHandler={() => {
        if (Actions.currentScene == "acmeListing") {
          BackHandler.exitApp();
          return false;
        }
      }}>
      <Scene key="root">
        <Scene key="acmeListing" component={ACMEListing} />
        <Scene key="acmeDetails" component={ACMEDetails} />
      </Scene>
    </Router>
  );
};
