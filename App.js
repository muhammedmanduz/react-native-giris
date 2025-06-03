import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [flag, setFlag] = useState(false);

  return (
    <View style={styles.box}>
      <Text style={[styles.bold, { color: flag ? "green" : "red" }]}>
        Muhammed Manduz
      </Text>
      <Text style={[styles.bold, { color: "red", fontSize: 40 }]}>
        Murat Manduz
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 20,
    color: "blue",
  },
});
