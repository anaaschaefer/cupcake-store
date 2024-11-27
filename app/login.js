import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCircleUser, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (email === "usuario@exemplo.com" && senha === "senha123") {
      alert("Login bem-sucedido!");
    } else {
      alert("Email ou senha incorretos!");
    }
  };

  const handleCadastro = () => {
    navigation.navigate("Cadastro");
  };

  const handleEsqueciSenha = () => {
    navigation.navigate("RecuperarSenha");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CUPCAKE STORE</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="******"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={handleEsqueciSenha}>
          <Text style={styles.linkSenha}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCadastro}>
          <Text style={styles.link}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#FFC3BE",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#9B6C67",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
  },
  linksContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  link: {
    color: "blue",
  },
  linkSenha: {
    color: "#808080",
  },
  button: {
    backgroundColor: "#2D9BF0",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default LoginScreen;
