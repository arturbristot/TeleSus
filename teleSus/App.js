import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";


import login from "./src/screens/login";
import home from "./src/screens/home";
import perfil from "./src/screens/perfil";


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={login}/>
        <Stack.Screen name="Home" component={home}/>
        <Stack.Screen name="Configo" component={perfil}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
