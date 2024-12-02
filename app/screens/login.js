import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUserCircle,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const id = response.data.id; // Supondo que o backend retorne userId
        await AsyncStorage.setItem("id", id.toString());
        router.push("screens/inicio");
      } else {
        alert("Erro inesperado! Tente novamente.");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Email ou senha incorretos!");
      } else {
        console.error("Erro ao realizar login:", error);
        alert("Ocorreu um erro. Verifique sua conexão ou tente mais tarde.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleCadastro = () => {
    router.push("screens/cadastro");
  };

  const handleEsqueciSenha = () => {
    router.push("screens/recuperar-senha");
  };

  return (
    <View style={styles.container}>
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
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="******"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setSenha}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.iconContainer}
        >
          <FontAwesomeIcon
            icon={isPasswordVisible ? faEye : faEyeSlash}
            size={20}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

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
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    marginBottom: 10,
    width: "100%",
  },
  inputPassword: {
    flex: 1,
    height: 40,
    paddingLeft: 8,
  },
  iconContainer: {
    padding: 10,
  },
  eyeIcon: {
    color: "#808080",
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
