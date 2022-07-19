import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.header}>
        <Searchbar placeholder="SEARCH"></Searchbar>
      </View>
      <View style = {styles.body}>
        <Text>Open up App.tsx to start working on your app!</Text>
        {/* <StatusBar style="auto" /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 0.05,
    backgroundColor: "green",
    padding: 20
  },
  body: {
    flex: 0.95,
    padding: 20,
    backgroundColor: "red"
  }
});
