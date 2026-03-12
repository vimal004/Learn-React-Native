import { View, Text, Button, TextInput } from "react-native";
import { useState } from "react";

export default function HomeScreen({ navigation }) {

  const [name, setName] = useState("");

  return (
    <View style={{ padding: 20 }}>

      <Text>Home Screen</Text>

      <TextInput
        placeholder="Enter name"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          marginVertical: 10,
          padding: 8
        }}
      />

      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate("Profile", { userName: name })
        }
      />

    </View>
  );
}