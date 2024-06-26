import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Touchable,
  KeyboardAvoidingView
} from "react-native";
import {
  MaterialIcons,
  AntDesign,
  FontAwesome,
  Ionicons,
  SimpleLineIcons,
  Feather,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";


export default function Suporte() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.centralizedContainer}>
        <View style={styles.fieldContainer}>
          <TouchableOpacity onPress={navigation.goBack}>
            <AntDesign name="left" size={30} color="#fff" />
          </TouchableOpacity>
          <FontAwesome
            style={styles.user}
            name="user-circle"
            size={35}
            color="#fff"
          />
          <Text style={styles.textuser}>Suporte</Text>
          <SimpleLineIcons
            style={styles.cam}
            name="camrecorder"
            size={25}
            color="#fff"
          />
          <SimpleLineIcons
            style={styles.phone}
            name="phone"
            size={22}
            color="#fff"
          />
        </View>
      </View>

      <ScrollView style={styles.chat1}>
        <View style={styles.cvs1}>
          <View style={styles.cvs}>
            <Text style={styles.textcvs}>
              Olá. Estou com um problema, você consegue me ajudar?
            </Text>
          </View>
          <SimpleLineIcons
            style={styles.usercvs}
            name="user"
            size={25}
            color="black"
          />
        </View>

        <SimpleLineIcons
          style={styles.usercvsfem}
          name="user-female"
          size={24}
          color="black"
        />
        <View style={styles.cvs2}>
          <View style={styles.cvs}>
            <Text style={styles.textcvs}>
              Claro! Nos ligue ou envie um "PRINT" de seu problema!
            </Text>
          </View>
        </View>
        <View style={styles.cvs3}>
          <View style={styles.cvs}>
            <Text style={styles.textcvs}>
              Com certeza! Irei lhe enviar tudo certinho e espero um retorno de
              vocês! Obrigado pelo atendimento ágil.
            </Text>
          </View>
          <SimpleLineIcons
            style={styles.usercvs}
            name="user"
            size={25}
            color="black"
          />
        </View>

        <View style={styles.cvs4}>
          <View style={styles.cvs}>
            <Ionicons
              style={styles.imgcvs}
              name="image-sharp"
              size={80}
              color="#fff"
            />
          </View>
          <SimpleLineIcons
            style={styles.usercvs3}
            name="user"
            size={25}
            color="black"
          />
        </View>
      </ScrollView>

      <KeyboardAvoidingView contentContainerStyle={styles.footer} behavior="position" enabled>
      
        <AntDesign style={styles.plus} name="plus" size={30} color="#fff" />
        <TextInput style={styles.input}></TextInput>
        <SimpleLineIcons
          style={styles.camera}
          name="camera"
          size={25}
          color="#fff"
        />
        <SimpleLineIcons
          style={styles.microphone}
          name="microphone"
          size={25}
          color="#fff"
        />
      
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "flex-start", // Alinha os itens ao topo
    alignItems: "center",
    backgroundColor: "#F5F5F5", // Background um pouco mais escuro
    margin: 0,
  },
  plus: {
    marginLeft: 20,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    width: "200",
    height: 100,
    paddingTop: 20,
    backgroundColor: "#1F63AD",
  },
  textcvs: {
    color: "#fff",
    fontSize: 15,
  },
  cvs1: {
    display: "flex",
    flexDirection: "row",
    marginTop: 30,
    width: "60%",
    padding: 20,
    height: 100,
    backgroundColor: "#006FFD",
    marginLeft: 110,
    borderRadius: 20,
  },
  usercvs: {
    position: "absolute",
    marginLeft: 245,
  },
  usercvsfem: {
    marginTop: 180,
    marginLeft: 10,
    position: "absolute",
  },
  cvs2: {
    display: "flex",
    flexDirection: "row",
    marginTop: 40,
    width: "60%",
    height: 100,
    backgroundColor: "#006FFD",
    padding: 20,
    marginLeft: 50,
    borderRadius: 20,
  },
  cvs3: {
    display: "flex",
    flexDirection: "row",
    marginTop: 40,
    width: "60%",
    padding: 20,
    height: 120,
    backgroundColor: "#006FFD",
    marginLeft: 110,
    borderRadius: 20,
  },
  cvs4: {
    display: "flex",
    flexDirection: "row",
    marginTop: 40,
    width: "30%",
    padding: 20,
    height: 120,
    backgroundColor: "#006FFD",
    marginLeft: 235,
    borderRadius: 20,
  },
  usercvs3: {
    position: "absolute",
    marginLeft: 125,
  },
  camera: {
    marginLeft: 35,
  },
  microphone: {
    marginLeft: 20,
    marginRight: 30,
  },
  input: {
    padding: 10,
    width: "50%",
    height: 35,
    backgroundColor: "#fff",
    borderRadius: 120,
    marginLeft: 30,
  },
  chat1: {
    width: "100%",
    height: 900,
    backgroundColor: "#ff",
  },
  centralizedContainer: {
    width: "100%",
    height: 110,
    justifyContent: "center", // Centraliza os itens na horizontal
    backgroundColor: "#1F63AD",
  },
  fieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
  },
  textuser: {
    marginLeft: 10,
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  user: {
    marginLeft: 30,
  },
  cam: {
    marginLeft: 130,
  },
  phone: {
    marginLeft: 20,
  },
});
