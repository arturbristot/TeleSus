import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Importe o hook

export default function login() {
  const navigation = useNavigation(); // Instancie o hook

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </>
  );
}