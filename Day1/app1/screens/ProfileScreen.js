import { View, Text, Button } from "react-native";

export default function ProfileScreen({ route, navigation }) {

  const { userName } = route.params;

  return (
    <View style={{ padding: 20 }}>

      <Text>Profile Screen</Text>

      <Text>User: {userName}</Text>

      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", {
            userName: userName,
            age: 21
          })
        }
      />

    </View>
  );
}