import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native";

//Icons: AntDesign
import { AntDesign } from '@expo/vector-icons';

//Import BottomTabs
import Home from "./src/screens/home";
import Perfil from "./src/screens/perfil";
import Config from "./src/screens/config";

//Imports Stack
import Login from "./src/screens/login";
import CadastrarHorario from './src/screens/CadastrarHorario';
import Teste from './src/screens/teste'

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
          tabBarActiveTintColor: "#2196F3",
          tabBarInactiveTintColor: "lightblue",
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
          tabBarActiveTintColor: "#2196F3",
          tabBarInactiveTintColor: "lightblue",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="profile" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Config"
        component={Config}
        options={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#2196F3",
          tabBarInactiveTintColor: "lightblue",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" size={size} color={color} />
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
          title: "TeleSUS",
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
        component={HomeTabs}
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