import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";
import { useSelector } from "react-redux";
import Moment from "moment";
import Card from "../shared/Card";

const DetailsModal = ({ route }) => {
  const movie = useSelector((state) =>
    state?.movies?.movies?.find((entity) => entity?.id === route?.params?.id)
  );

  return (
    <View style={globalStyles?.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Card>
              <Text style={globalStyles?.titleText}>{movie?.title}</Text>
              <Image style={styles?.image} source={{ uri: movie?.posterurl }} />
            </Card>
            <Text style={styles?.heading}>Release Date</Text>
            <Text>{Moment(movie?.releaseDate).format("MMMM DD, YYYY")}</Text>
            <Text style={styles?.heading}>IMDb Ratings</Text>
            <Text>{movie?.imdbRating || "--"}/10.0</Text>
            <Text style={styles?.heading}>Duration</Text>
            <Text>
              {movie?.duration
                ? movie?.duration.match(/\d+/) + " minutes"
                : "Not available"}
            </Text>
            <Text style={styles?.heading}>Cast</Text>
          </>
        }
        ListFooterComponent={
          <Card>
            <Text style={styles?.heading}>Synopsis</Text>
            <Text>{movie?.storyline}</Text>
          </Card>
        }
        data={movie?.actors}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <Text style={styles?.list}>{item}</Text>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 500,
    borderRadius: 20,
    marginVertical: 10,
  },
  heading: {
    fontFamily: "NunitoSansExtraBold",
    marginVertical: 5,
    textDecorationLine: "underline",
  },
  list: {
    borderBottomWidth: 1,
    marginVertical: 5,
  },
});

export default DetailsModal;
