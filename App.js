import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import Foo from "./components/Foo/Foo";

export default function App() {
  const [flag, setFlag] = useState(false);

  return (
    <View style={styles.box}>
      <Foo />

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
