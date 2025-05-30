import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Merhaba native</Text>
      <StatusBar style="auto" />

      <View style={styles.subContainer}>
        <Text> Text Text</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  subContainer: {
    backgroundColor: "black",
    width: 100,
    height: 100,
  },
});
