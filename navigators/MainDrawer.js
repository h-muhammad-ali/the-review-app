import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import MainStackNavigator from "./MainStackNavigator";
import AboutStack from "./AboutStack";

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  function getHeaderVisibility(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "Home";
    switch (routeName) {
      case "Home":
        return true;
      case "Movies":
        return false;
      case "MovieDetails":
        return false;
    }
  }

  return (
    <Drawer.Navigator>
      <Drawer.Screen
        options={({ route }) => ({
          headerShown: getHeaderVisibility(route),
          title: "My Home",
        })}
        name="HomeStack"
        component={MainStackNavigator}
      />
      <Drawer.Screen
        options={{ title: "About" }}
        name="AboutStack"
        component={AboutStack}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
