import { View, Text, Button, TextInput, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import { useState, useEffect } from "react";

export default function HomeScreen({ navigation }) {
  const [name, setName] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await res.json();
        setData(json.slice(0, 5)); // Just take first 5 for preview
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Home</Text>

      <View style={styles.dataSection}>
        <Text style={styles.subtitle}>Recent Posts</Text>
        {loading ? (
          <ActivityIndicator size="small" color="#007AFF" />
        ) : (
          data.map((item) => (
            <Text key={item.id} style={styles.postItem}>• {item.title}</Text>
          ))
        )}
      </View>

      <View style={styles.inputSection}>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />

        <Button
          title="Go to Profile"
          onPress={() =>
            navigation.navigate("Profile", { userName: name || "Anonymous" })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 20,
    marginTop: 40,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#4a4a4a",
    marginBottom: 10,
  },
  dataSection: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 24,
  },
  postItem: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  inputSection: {
    gap: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
});