import { Style } from "./Style";
import { View, Text } from "react-native";

const Foo = () => {
  return (
    <View style={Style.box}>
      <Text style={Style.text}>Foo</Text>
    </View>
  );
};

export default Foo;
