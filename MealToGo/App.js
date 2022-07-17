import { StatusBar as ExpoStatusBar} from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View ,Platform, StatusBar} from 'react-native';

const isAndroid = function() {
  Platform.OS === 'android' 
}
// const isAndroid =
// console.log(StatusBar.currentHeight)
export default function App() {
  return (
    <SafeAreaView  style = {{flex: 1 , marginTop: isAndroid ? StatusBar.currentHeight : 0 }}>
      <View style={styles.header}>
        <Text>FIND</Text>
        {/* <StatusBar style="auto" /> */}

      </View>
      <View style = {styles.body}>
      <Text >BODY</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  header: {
    flex: 0.05,
    backgroundColor: 'green',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,

  },
  body: {
    flex: 0.95,
    backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,

  },
});
