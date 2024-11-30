import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter(); // Usa o hook do Expo Router

  const handleLogin = () => {
    if (email === "usuario@exemplo.com" && senha === "senha123") {
      alert("Login bem-sucedido!");
      router.push("screens/inicio"); // Redireciona para a tela inicial
    } else {
      alert("Email ou senha incorretos!");
    }
  };

  const handleCadastro = () => {
    router.push("screens/cadastro"); // Navega para a tela de cadastro
  };

  const handleEsqueciSenha = () => {
    router.push("screens/recuperar-senha"); // Navega para a tela de recuperação de senha
  };

  return (
    <View style={styles.container}>
      {/* Ícone de Usuário */}
      <Text style={styles.title}>CUPCAKE STORE</Text>

      <FontAwesomeIcon icon={faUserCircle} size={200} style={styles.icon} />

      <Text style={styles.infoInput}>E-mail:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.infoInput}>Senha:</Text>
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
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFC3BE",
  },
  icon: {
    color: "#ffffff",
    marginBottom: 20,
    width: "100%",
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
    width: "100%", // Largura total do input
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
    width: "100%",
  },
  link: {
    color: "blue",
  },
  linkSenha: {
    color: "#808080",
  },
  infoInput: {
    color: "#808080",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: "#2D9BF0",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    elevation: 3,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default LoginScreen;
