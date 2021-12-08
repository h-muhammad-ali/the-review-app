import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainStackNavigator from "./MainStackNavigator";
import AboutStack from "./AboutStack";

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
      <Drawer.Navigator>
        <Drawer.Screen options={{title: "My Home"}} name="HomeStack" component={MainStackNavigator} />
        <Drawer.Screen options={{title: "About"}} name="AboutStack" component={AboutStack} />
      </Drawer.Navigator>
  );
}

export default MainDrawer;
