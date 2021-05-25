import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "../screens/app/landing/Landing";

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Landing"
      component={LandingScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default AppNavigator;
