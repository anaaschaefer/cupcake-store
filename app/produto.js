import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProdutoScreen = ({ navigation }) => {
  // Dados fictícios do produto
  const produto = {
    id: "1",
    nome: "Cupcake de chocolate",
    descricao:
      "Delicioso cupcake de chocolate com cobertura de chocolate ao leite e granulados.",
    preco: 5.0,
    imagem:
      "https://img.freepik.com/fotos-premium/um-cupcake-de-chocolate-com-cobertura-de-chocolate-e-granulado-de-chocolate_391229-4323.jpg?w=740", // Substitua pela URL da imagem do produto
  };

  // Função para adicionar ao carrinho (placeholder)
  const adicionarAoCarrinho = () => {
    alert(`${produto.nome} foi adicionado ao carrinho.`);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>Voltar</Text>
      </TouchableOpacity>
      {/* Imagem do produto */}
      <Image source={{ uri: produto.imagem }} style={styles.imagem} />

      {/* Informações do produto */}
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text style={styles.descricao}>{produto.descricao}</Text>
      <Text style={styles.preco}>R$ {produto.preco.toFixed(2)}</Text>

      {/* Botões de ação */}
      <TouchableOpacity
        style={styles.botaoAdicionar}
        onPress={adicionarAoCarrinho}
      >
        <Text style={styles.botaoTexto}>Adicionar ao carrinho</Text>
      </TouchableOpacity>

      <View style={styles.navegacao}>
        <TouchableOpacity>
          <Text style={styles.navegacaoTexto}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navegacaoTexto}>Categorias</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navegacaoTexto}>Pedidos</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navegacaoTexto}>Perfil</Text>
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
    backgroundColor: "#f4f4f4",
  },
  imagem: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  descricao: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  preco: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4caf50",
    marginBottom: 30,
  },
  botaoAdicionar: {
    backgroundColor: "#000000",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  botaoVoltar: {
    textAlign: "left",
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

export default ProdutoScreen;
