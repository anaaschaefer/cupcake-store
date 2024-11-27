import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const CadastroScreen = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [senha, setSenha] = useState("");

  const handleCadastro = () => {
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Cadastro</Text>

      <Text>Nome:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={nome}
        onChangeText={setNome}
      />

      <Text>E-mail:</Text>
      <TextInput
        style={styles.input}
        placeholder="email@email.com"
        value={email}
        onChangeText={setEmail}
      />

      <Text>Telefone:</Text>
      <TextInput
        style={styles.input}
        placeholder="(00)00000-0000"
        value={telefone}
        onChangeText={setTelefone}
      />

      <Text>Endereço:</Text>
      <TextInput
        style={styles.input}
        placeholder="Rua..."
        value={endereco}
        onChangeText={setEndereco}
      />

      <Text>Senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="******"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

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
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
    borderRadius: 5,
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

export default CadastroScreen;
