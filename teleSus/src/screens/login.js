import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importe o hook

export default function App() {
  const navigation = useNavigation(); // Instancie o hook

  return (
    <>
        <Text>Login</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </>
  );
}
