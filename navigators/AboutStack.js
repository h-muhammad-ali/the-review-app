import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/About";

const Stack = createNativeStackNavigator();

const AboutStack = () => (
  <Stack.Navigator initialRouteName="About">
    <Stack.Screen
      options={{ headerShown: false }}
      name="About"
      component={About}
    />
  </Stack.Navigator>
);

export default AboutStack;
