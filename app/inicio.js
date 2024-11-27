import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

const HomeScreen = () => {
  const destaques = [
    {
      id: "1",
      titulo: "Sabores diversos",
      preco: "A partir de R$5,00",
      imagem: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      titulo: "Dietas especiais",
      preco: "A partir de R$7,00",
      imagem: "https://via.placeholder.com/150",
    },
  ];

  // Renderizar cada item da lista
  const renderDestaque = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.cardImagem} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitulo}>{item.titulo}</Text>
        <Text style={styles.cardPreco}>{item.preco}</Text>
        <TouchableOpacity style={styles.cardBotao}>
          <Text style={styles.cardBotaoTexto}>Ver detalhes</Text>
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

      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={{
            uri: "https://via.placeholder.com/300x150", // Substitua por uma URL real
          }}
          style={styles.bannerImagem}
        />
        <View style={styles.bannerTextoContainer}>
          <Text style={styles.bannerTitulo}>Bem-vindo à Cupcake Store!</Text>
          <Text style={styles.bannerDescricao}>
            Deliciosos cupcakes esperando por você.
          </Text>
          <TouchableOpacity style={styles.bannerBotao}>
            <Text style={styles.bannerBotaoTexto}>Ver mais</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Destaques */}
      <Text style={styles.destaquesTitulo}>Destaques</Text>
      <FlatList
        data={destaques}
        renderItem={renderDestaque}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
      />

      {/* Navegação */}
      <View style={styles.navegacao}>
        <TouchableOpacity>
          <Text style={[styles.navegacaoTexto, styles.navegacaoAtivo]}>
            Início
          </Text>
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
    backgroundColor: "#f9f9f9",
  },
  cabecalho: {
    backgroundColor: "#FFC3BE",
    padding: 15,
    alignItems: "center",
  },
  cabecalhoTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#9B6C67",
  },
  banner: {
    margin: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  bannerImagem: {
    width: "100%",
    height: 150,
  },
  bannerTextoContainer: {
    padding: 10,
    backgroundColor: "#fff",
  },
  bannerTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  bannerDescricao: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    marginBottom: 10,
  },
  bannerBotao: {
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  bannerBotaoTexto: {
    color: "#fff",
    fontWeight: "bold",
  },
  destaquesTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginBottom: 10,
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

export default HomeScreen;
