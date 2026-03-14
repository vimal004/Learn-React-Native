import { View, Text, Button, StyleSheet } from "react-native";

export default function ProfileScreen({ route, navigation }) {
  const { userName } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Profile Details</Text>
        
        <View style={styles.infoRow}>
          <Text style={styles.label}>User Name:</Text>
          <Text style={styles.value}>{userName}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Go to Details"
            color="#007AFF"
            onPress={() =>
              navigation.navigate("Details", {
                userName: userName,
                age: 21
              })
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f8f9fa",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 20,
    textAlign: "center",
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  label: {
    fontSize: 16,
    color: "#666",
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  buttonContainer: {
    gap: 12,
  },
});