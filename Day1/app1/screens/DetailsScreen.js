import { View, Text, Button } from "react-native";

export default function DetailsScreen({ route, navigation }) {

  const { userName, age } = route.params;

  return (
    <View style={{ padding: 20 }}>

      <Text>Details Screen</Text>

      <Text>Name: {userName}</Text>
      <Text>Age: {age}</Text>

      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
      />

    </View>
  );
}