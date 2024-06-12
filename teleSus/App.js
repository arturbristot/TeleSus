import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import home from "./src/screens/home";
import perfil from "./src/screens/perfil";


export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={home}/>
        <Stack.Screen name="perfil" component={perfil}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
