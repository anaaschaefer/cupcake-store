import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faHome,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const CadastroScreen = () => {
  const [username, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setTelefone] = useState("");
  const [address, setEndereco] = useState("");
  const [password, setSenha] = useState("");
  const router = useRouter();

  const handleCadastro = async () => {
    if (username && email && phone && address && password) {
      try {
        const response = await axios.post("http://localhost:8080/users", {
          username,
          email,
          phone,
          address,
          password,
        });
        if (response.status === 201 || response.status === 200) {
          alert("Cadastro realizado com sucesso!");
          router.push("screens/meu-perfil");
        } else {
          alert("Ocorreu um erro ao cadastrar. Tente novamente.");
        }
      } catch (error) {
        console.error(error);
        alert("Erro ao se conectar com o servidor. Verifique sua conexão.");
      }
    } else {
      alert("Por favor, preencha todos os campos!");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faUser} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={username}
          onChangeText={setNome}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="email@email.com"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faPhone} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="(00)00000-0000"
          value={phone}
          onChangeText={setTelefone}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faHome} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Rua..."
          value={address}
          onChangeText={setEndereco}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faLock} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="*****"
          secureTextEntry
          value={password}
          onChangeText={setSenha}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    color: "#7F7F7F",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
  },
  icon: {
    color: "#7F7F7F",
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  button: {
    backgroundColor: "#2D9BF0",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default CadastroScreen;
