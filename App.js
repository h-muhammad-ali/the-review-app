import React from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import MainDrawer from "./navigators/MainDrawer";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  const [loaded] = useFonts({
    Pacifico: require("./assets/fonts/Pacifico-Regular.ttf"),
    NunitoSansBold: require("./assets/fonts/NunitoSans-Bold.ttf"),
    NunitoSansRegular: require("./assets/fonts/NunitoSans-Regular.ttf"),
    NunitoSansSemiBold: require("./assets/fonts/NunitoSans-SemiBold.ttf"),
    NunitoSansExtraBold: require("./assets/fonts/NunitoSans-ExtraBold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainDrawer />
      </NavigationContainer>
    </Provider>
  );
}
