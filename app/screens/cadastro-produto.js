import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import CustomButtonBlack from "../components/botaoBlack";
import CustomNavigation from "../components/CustomNavigation";
import { useRouter } from "expo-router";

const CadastroProdutoScreen = () => {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");
  const [cadastroConcluido, setCadastroConcluido] = useState(false);
  const router = useRouter();

  const handleSalvar = () => {
    if (!nome || !preco || !descricao || !imagem) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    setCadastroConcluido(true);
  };

  const novoCadastro = () => {
    setNome("");
    setPreco("");
    setDescricao("");
    setImagem("");
    setCadastroConcluido(false);
  };

  const irParaCatalogo = () => {
    router.push("screens/catalogo");
  };

  const voltar = () => {
    router.back();
  };

  if (cadastroConcluido) {
    return (
      <View style={styles.container}>
        <Text style={styles.mensagemSucesso}>
          Produto cadastrado com sucesso!
        </Text>
        <View style={styles.buttonsContainer}>
          <CustomButtonBlack
            title="Ir para o catálogo"
            onPress={irParaCatalogo}
          />
          <CustomButtonBlack
            title="Cadastrar novo produto"
            onPress={novoCadastro}
          />
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={voltar}>
        <Text style={styles.cabecalhoBotao}>Voltar</Text>
      </TouchableOpacity>

      {/* Formulário */}
      <Text style={styles.titulo}>Cadastro de produto</Text>

      <View style={styles.formulario}>
        {/* Campos de cadastro */}
        <Text style={styles.label}>Nome do produto</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do produto"
          value={nome}
          onChangeText={setNome}
        />
        <Text style={styles.label}>Preço (R$)</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o preço"
          value={preco}
          onChangeText={setPreco}
          keyboardType="numeric"
        />
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Digite a descrição do produto"
          value={descricao}
          onChangeText={setDescricao}
          multiline
        />
        <Text style={styles.label}>URL da imagem</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a URL da imagem"
          value={imagem}
          onChangeText={setImagem}
        />
      </View>

      {/* Botão Salvar */}
      <CustomButtonBlack title="Salvar" onPress={handleSalvar} />
      <CustomNavigation style={styles.navigation} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingBottom: 20,
  },
  cabecalhoBotao: {
    fontSize: 16,
    color: "#00000",
    marginLeft: 20,
  },
  titulo: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
    marginHorizontal: 20,
    color: "#808080",
  },
  formulario: {
    marginHorizontal: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    color: "#555",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  mensagemSucesso: {
    fontSize: 20,
    color: "green",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navigation: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default CadastroProdutoScreen;
