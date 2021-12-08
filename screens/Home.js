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
        showsVerticalScrollIndicator={false}
        data={genres}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation?.navigate("Movies", {genre: item})}
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
