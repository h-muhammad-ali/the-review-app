import React from "react";
import Home from '../screens/Home';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Movies from "../screens/Movies";
import DetailsModal from "../screens/DetailsModal";

const Stack = createNativeStackNavigator();

const MainStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen  name="Movies" component={Movies} />
      <Stack.Screen name="MovieDetails" component={DetailsModal} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
