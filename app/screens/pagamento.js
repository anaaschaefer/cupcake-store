import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import CustomNavigation from "../components/CustomNavigation";
import CustomButtonBlack from "../components/botaoBlack";

const PagamentoScreen = () => {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [validade, setValidade] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCadastro = () => {
    alert("Pagamento realizado com sucesso!");
    router.push("screens/status-pedido");
  };

  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Pagamento</Text>
      <Text>Nome no cartão:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />
      <Text>Número do cartão:</Text>
      <TextInput style={styles.input} value={numero} onChangeText={setNumero} />
      <Text>Data de validade:</Text>
      <TextInput
        style={styles.input}
        value={validade}
        onChangeText={setValidade}
      />
      <Text>CVV:</Text>
      <TextInput style={styles.input} value={cvv} onChangeText={setCvv} />
      <CustomButtonBlack title={"Pagar"} onPress={handleCadastro} />
      <CustomNavigation />
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
    backgroundColor: "#000000",
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
  navegacao: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
    paddingBottom: 30,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  navegacaoTexto: {
    color: "#808080",
    fontWeight: "bold",
  },
});

export default PagamentoScreen;
