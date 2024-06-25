import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import "react-native-gesture-handler";

import Login from "./src/screens/Login";
import Home from "./src/screens/logado/bottomTabs/Home";
import Perfil from "./src/screens/logado/bottomTabs/Perfil";
import Config from "./src/screens/logado/bottomTabs/Config";
import CadastrarHorario from "./src/screens/logado/stack/CadastrarHorario";
import CadastrarUsuario from "./src/screens/logado/stack/CadastrarUsuario";
import HorariosAgendados from "./src/screens/logado/stack/HorariosAgendados";
import Info from "./src/screens/logado/stack/Info";
import Privacidade from "./src/screens/logado/stack/Privacidade";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

function HomeTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black-100",
        tabBarInactiveTintColor: "black",
        headerTintColor: "black",
        headerTitleAlign: "center",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={24} color="#006FFD" />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={24} color="#006FFD" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="CadastrarUsuario" component={CadastrarUsuario} />
        <Stack.Screen
          name="CadastrarHorario"
          component={CadastrarHorario}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="HorariosAgendados"
          component={HorariosAgendados}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="info"
          component={Info}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="privacidade"
          component={Privacidade}
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
