import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import CustomButtonBlack from "../components/botaoBlack";
import CustomNavigation from "../components/CustomNavigation";
import { useRouter } from "expo-router";

const CatalogoScreen = () => {
  const router = useRouter();

  const produtos = [
    {
      id: "1",
      titulo: "Chocolate",
      preco: "A partir de R$5,00",
      descricao: "Um delicioso cupcake de chocolate.",
      imagem:
        "https://img.freepik.com/fotos-premium/um-cupcake-de-chocolate-com-cobertura-de-chocolate-e-granulado-de-chocolate_391229-4323.jpg?w=740", // Substitua pela URL da imagem do produto
    },
    {
      id: "2",
      titulo: "Baunilha",
      preco: "A partir de R$6,00",
      descricao: "Um cupcake clássico de baunilha.",
      imagem:
        "https://i.pinimg.com/736x/ed/87/e8/ed87e84b26193cb02064580f9fce4731.jpg",
    },
    {
      id: "3",
      titulo: "Red Velvet",
      preco: "A partir de R$8,00",
      descricao: "Cupcake de Red Velvet com cobertura especial.",
      imagem:
        "https://www.livewellbakeoften.com/wp-content/uploads/2021/06/Red-Velvet-Cupcakes-3-New-copy.jpg",
    },
  ];

  // Renderizar cada item da lista
  const renderProduto = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.cardImagem} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitulo}>{item.titulo}</Text>
        <Text style={styles.cardPreco}>{item.preco}</Text>
        <CustomButtonBlack
          title="Comprar"
          onPress={() =>
            router.push({
              pathname: "screens/produto",
              params: {
                id: item.id,
                titulo: item.titulo,
                preco: item.preco,
                descricao: item.descricao,
                imagem: item.imagem,
              },
            })
          }
          style={styles.cardBotao}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.cabecalho}>
        <Text style={styles.cabecalhoTitulo}>CUPCAKE STORE</Text>
      </View>

      {/* Botão Voltar */}
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.cabecalhoBotao}>Voltar</Text>
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
      <CustomNavigation />
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
  cabecalhoTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#9B6C67",
  },
  cabecalhoBotao: {
    fontSize: 16,
    color: "#000",
    marginLeft: 20,
    marginVertical: 10,
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
    width: 120,
    height: 130,
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
});

export default CatalogoScreen;
