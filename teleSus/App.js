import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//Imports Stack
import Login from "./src/screens/login";
import Home from "./src/screens/home";
import Perfil from "./src/screens/perfil";
import CadastrarHorario from './src/screens/CadastrarHorario';
import Teste from './src/screens/teste'
import Suporte from "./src/screens/suporte";

function HomeTabs() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "lightgreen",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Perfil"
        component={Perfil}
        options={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "lightgreen",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ticket-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Config"
        component={Config}
        options={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "lightgreen",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="login" size={size} color={color} />
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
      <Stack.Navigator>
        <Stack.Screen name="Login"
        component={Login}
        options={{
          title: "Login",
          headerStyle: {
            backgroundColor: 'white', // Background color of the header
          },
          headerTintColor: '#2196F3', // Color of the header text
          headerTitleStyle: {
            fontWeight: 'bold', // Title font weight
          },
          headerBackTitle: "Voltar", // Text for the back button
          headerBackTitleStyle: {
            color: 'white', // Color of the back button text
          },
        }}
      />
      <Stack.Screen name="Suporte"
          component={Suporte}
          options={{
            title: "Suporte",
            headerStyle: {
              backgroundColor: 'white', // Background color of the header
            },
            headerTintColor: '#2196F3', // Color of the header text
            headerTitleStyle: {
              fontWeight: 'bold', // Title font weight
            },
            headerBackTitle: "Voltar", // Text for the back button
            headerBackTitleStyle: {
              color: 'white', // Color of the back button text
            },
          }}
        />
        <Stack.Screen 
        name="Home"
        component={Home}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: 'white', // Background color of the header
          },
          headerTintColor: '#2196F3', // Color of the header text
          headerTitleStyle: {
            fontWeight: 'bold', // Title font weight
          },
          headerBackTitle: "Voltar", // Text for the back button
          headerBackTitleStyle: {
            color: 'white', // Color of the back button text
          },
        }}
      />
        <Stack.Screen 
          name="CadastrarHorario"
          component={CadastrarHorario}
          options={{
            title: "Cadastro de Horário",
            headerStyle: {
              backgroundColor: 'white', // Background color of the header
            },
            headerTintColor: '#2196F3', // Color of the header text
            headerTitleStyle: {
              fontWeight: 'bold', // Title font weight
            },
            headerBackTitle: "Voltar", // Text for the back button
            headerBackTitleStyle: {
              color: 'white', // Color of the back button text
            },
          }}
        />
        <Stack.Screen 
          name="Teste"
          component={Teste}
          options={{
            title: "Cadastro hora",
            headerStyle: {
              backgroundColor: 'white', // Background color of the header
            },
            headerTintColor: '#2196F3', // Color of the header text
            headerTitleStyle: {
              fontWeight: 'bold', // Title font weight
            },
            headerBackTitle: "Voltar", // Text for the back button
            headerBackTitleStyle: {
              color: 'white', // Color of the back button text
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}