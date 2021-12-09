import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { globalStyles } from "../styles/global";

const About = () => (
  <View style={globalStyles?.container}>
    <Text style={globalStyles?.titleText}>About</Text>
    <Text style={styles?.text}>the review app</Text>
  </View>
);

const styles = StyleSheet.create({
  text: {
    color: "blue",
    fontFamily: "Pacifico",
    textDecorationLine: "underline",
    fontSize: 30,
  },
});

export default About;
