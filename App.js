import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  const alertMe = () => {
    Alert.alert("Dikkat", "Silme işlemini onaylıyor musunuz?", [
      {
        text: "İptal",
        onPress: () => alert("İptal edildi"),
        style: "cancel",
      },
      {
        text: "Tamam",
        onPress: () => alert("Silindi"),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button onPress={alertMe} title="Press Me" />
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
