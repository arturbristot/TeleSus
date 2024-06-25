import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importe o hook

export default function Config() {
  const navigation = useNavigation(); // Instancie o hook

  return (
    <View style={styles.container}>
      <Text>Config</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
