import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  console.log("Executed")
  return (
    <View style={{ flex: 1 }}>
      {/* <View style={{ flex: 1, backgroundColor: "red" }} /> */}
      <View style={{ flex: 1, backgroundColor: "blue" }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
