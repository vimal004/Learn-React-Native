import { View, Text, StyleSheet } from "react-native-web";

const App = () => {
  return (
    <View>
      <Text style={styles.text}>
        Hi Hello there
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "red"
  }
});

export default App;