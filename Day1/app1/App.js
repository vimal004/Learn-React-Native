import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView } from 'react-native';

export default function App() {
  console.log("Executed")
  return (
      <ScrollView>
      <Text>Item 1</Text>
      <Text>Item 2</Text>
      <Text>Item 3</Text>
      <Text>Item 4</Text>
      <Text>Item 5</Text>
      <Text>Item 6</Text>
      <Text>Item 7</Text>
      <Text>Item 8</Text>
      <Text>Item 9</Text>
      <Text>Item 10</Text>
    </ScrollView>
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
