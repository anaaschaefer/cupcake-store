import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const RecuperarSenhaScreen = () => {
  const [email, setEmail] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");
  const router = useRouter();

  const handleRecuperacao = () => {
    if (!email) {
      alert("Erro! Por favor, insira um email válido.");
      return;
    }

    if (!novaSenha || !confirmaSenha) {
      alert("Erro! Preencha os campos de senha.");
      return;
    }

    if (novaSenha.length < 6) {
      alert("Erro! A nova senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (novaSenha !== confirmaSenha) {
      alert("Erro! As senhas não coincidem.");
      return;
    }

    alert("Sucesso! Sua senha foi redefinida com sucesso!");
    router.push("screens/login");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Redefinir senha</Text>

      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text>Nova senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a nova senha"
        value={novaSenha}
        onChangeText={setNovaSenha}
        secureTextEntry
      />

      <Text>Confirme a nova senha:</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirme a nova senha"
        value={confirmaSenha}
        onChangeText={setConfirmaSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRecuperacao}>
        <Text style={styles.buttonText}>Redefinir</Text>
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
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default RecuperarSenhaScreen;
