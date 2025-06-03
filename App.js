import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* local den resim yükleme  */}
      <Image
        style={{ width: 200, height: 200 }}
        source={require("./assets/hepsiburada.jpeg")}
      />
      {/* internetten resim yükleme  */}
      <Image
        style={{ width: 200, height: 200 }}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
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
