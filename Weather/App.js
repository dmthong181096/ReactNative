import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";




export default function App() {
  function getMoviesFromApi() {
    return fetch("https://reactnative.dev/movies.json")
      .then((response) => response.json())
      .then((json) => {
        console.log(json.movies[0]);
        return json.movies;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={getMoviesFromApi}>
        <Text> Demo</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
