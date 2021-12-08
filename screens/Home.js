import React from "react";
import { View, Text } from "react-native";
import Card from '../shared/Card';
import { globalStyles } from "../styles/global";
import { genres } from "../data/genres";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const Home = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={genres}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation?.navigate("ReviewDetails")}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
