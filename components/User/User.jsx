import React from "react";
import { Style } from "./Style";

const User = () => {
  return (
    <View style={Style.box}>
      <Text style={Style.surname}>Muhammed Manduz</Text>
      <Text style={Style.surname}>Murat Manduz</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default User;
