import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const CadastroProdutoScreen = ({ navigation }) => {
  // Estados para armazenar os dados do formulário
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState("");

  const handleSalvar = () => {
    if (!nome || !preco || !descricao || !imagem) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    // Lógica para salvar o produto (pode ser integrado com uma API ou banco de dados)
    alert(`Produto "${nome}" cadastrado com sucesso!`);
    navigation.goBack(); // Voltar para a tela anterior
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.cabecalho}>
        <Text style={styles.cabecalhoTitulo}>CUPCAKE STORE</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.cabecalhoBotao}>Voltar</Text>
      </TouchableOpacity>
      {/* Formulário */}
      <Text style={styles.titulo}>Cadastro de Produto</Text>

      <View style={styles.formulario}>
        {/* Campo Nome */}
        <Text style={styles.label}>Nome do Produto</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do produto"
          value={nome}
          onChangeText={setNome}
        />

        {/* Campo Preço */}
        <Text style={styles.label}>Preço (R$)</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o preço"
          value={preco}
          onChangeText={setPreco}
          keyboardType="numeric"
        />

        {/* Campo Descrição */}
        <Text style={styles.label}>Descrição</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Digite a descrição do produto"
          value={descricao}
          onChangeText={setDescricao}
          multiline
        />

        {/* Campo URL da Imagem */}
        <Text style={styles.label}>URL da Imagem</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a URL da imagem"
          value={imagem}
          onChangeText={setImagem}
        />
      </View>

      {/* Botão Salvar */}
      <TouchableOpacity style={styles.botaoSalvar} onPress={handleSalvar}>
        <Text style={styles.botaoSalvarTexto}>Salvar produto</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  cabecalho: {
    backgroundColor: "#FFC3BE",
    padding: 15,
    alignItems: "center",
  },
  cabecalhoBotao: {
    fontSize: 16,
    color: "#00000",
    marginLeft: 20,
  },
  cabecalhoTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#9B6C67",
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
  botaoSalvar: {
    backgroundColor: "#000000",
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  botaoSalvarTexto: {
    fontSize: 16,
    color: "#fff",
  },
});

export default CadastroProdutoScreen;
