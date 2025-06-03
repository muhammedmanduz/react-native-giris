import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Button
        onPress={() => setCount((prevCount) => prevCount + 1)}
        title="Increase"
        color="red"
      />
      <Button
        onPress={() => setCount((prevCount) => prevCount - 1)}
        title="Decrease"
      />
      <Text style={styles.textStyle}>Count: {count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  subContainer: {
    borderWidth: 2,
    borderColor: "blue",
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    borderRadius: 20,
  },
  textStyle: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
});
