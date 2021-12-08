import React, { useEffect } from "react";
import { TouchableOpacity, FlatList, View, Text } from "react-native";
import { globalStyles } from "../styles/global";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/movies/moviesActions";
import Card from '../shared/Card';

const Movies = ({ route, navigation }) => {
  const { loading, movies, error } = useSelector((state) => state?.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, []);
  if (loading) {
    return null;
  }
  if (error) {
    return <Text style={globalStyles.titleText}>{error}</Text>;
  }
  return (
    <View style={globalStyles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={movies?.filter((movie) => movie.genres.includes(route.params.genre))}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation?.navigate("MovieDetails", { id: item.id })}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Movies;
