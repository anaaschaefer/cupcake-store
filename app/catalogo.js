import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

const CatalogoScreen = ({ navigation }) => {
  // Dados de exemplo para o catálogo de produtos
  const produtos = [
    {
      id: "1",
      titulo: "Chocolate",
      preco: "A partir de R$5,00",
      imagem: "https://via.placeholder.com/150", // Substitua por URL real
    },
    {
      id: "2",
      titulo: "Baunilha",
      preco: "A partir de R$6,00",
      imagem: "https://via.placeholder.com/150", // Substitua por URL real
    },
    {
      id: "3",
      titulo: "Red Velvet",
      preco: "A partir de R$8,00",
      imagem: "https://via.placeholder.com/150", // Substitua por URL real
    },
  ];

  // Renderizar cada item da lista
  const renderProduto = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.cardImagem} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitulo}>{item.titulo}</Text>
        <Text style={styles.cardPreco}>{item.preco}</Text>
        <TouchableOpacity style={styles.cardBotao}>
          <Text style={styles.cardBotaoTexto}>Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.cabecalho}>
        <Text style={styles.cabecalhoTitulo}>CUPCAKE STORE</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.voltarTexto}>Voltar</Text>
      </TouchableOpacity>
      {/* Título da página */}
      <Text style={styles.titulo}>Catálogo de cupcakes</Text>

      {/* Lista de produtos */}
      <FlatList
        data={produtos}
        renderItem={renderProduto}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
      />

      {/* Navegação */}
      <View style={styles.navegacao}>
        <TouchableOpacity>
          <Text style={styles.navegacaoTexto}>Início</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.navegacaoTexto, styles.navegacaoAtivo]}>
            Categorias
          </Text>
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
    backgroundColor: "#f9f9f9",
  },
  cabecalho: {
    backgroundColor: "#fcb8b8",
    padding: 15,
    alignItems: "center",
  },
  voltarTexto: {
    fontSize: 16,
    marginLeft: 20,
  },
  cabecalhoTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#9B6C67",
  },
  titulo: {
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: 10,
    textAlign: "center",
    color: "#808080",
  },
  lista: {
    paddingHorizontal: 20,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
  },
  cardImagem: {
    width: 80,
    height: 80,
  },
  cardInfo: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  cardTitulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardPreco: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#9B6C67",
    marginBottom: 10,
  },
  cardBotao: {
    backgroundColor: "#000000",
    padding: 8,
    borderRadius: 5,
    alignSelf: "flex-start",
  },
  cardBotaoTexto: {
    color: "#fff",
    fontWeight: "bold",
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
  navegacaoAtivo: {
    color: "#2D9BF0",
  },
});

export default CatalogoScreen;
