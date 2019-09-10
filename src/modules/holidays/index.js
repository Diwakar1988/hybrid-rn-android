import React from 'react';
import {BackHandler} from "react-native"
import {Router, Scene, Actions} from 'react-native-router-flux';
import {HolidaysListing} from './HolidaysListing';
import {HolidayDetails} from './HolidayDetails';

export const HolidaysLanding = () => {
  return (
    <Router
      backAndroidHandler={() => {
        if (Actions.currentScene == "holidaysListing") {
          BackHandler.exitApp();
          return false;
        }
      }}>
      <Scene key="root">
        <Scene
          key="holidaysListing"
          component={HolidaysListing}
          initial={true}
        />
        <Scene key="holidayDetails" component={HolidayDetails} />
      </Scene>
    </Router>
  );
};
