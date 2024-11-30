import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import CustomNavigation from "../components/CustomNavigation";
import CustomButtonBlack from "../components/botaoBlack";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const router = useRouter();

  const destaques = [
    {
      id: "1",
      titulo: "Sabores diversos",
      preco: "A partir de R$5,00",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOeX5ODNNWX5jQG4X305ptoIg2O2Tgq07kaw&s",
    },
    {
      id: "2",
      titulo: "Dietas especiais",
      preco: "A partir de R$7,00",
      imagem:
        "https://nutritotal.com.br/publico-geral/wp-content/uploads/2021/09/Receitas_Cupcake_saudavel_nutritotal_para_todos_novosite.jpg",
    },
  ];

  // Renderizar cada item da lista
  const renderDestaque = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.imagem }} style={styles.cardImagem} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitulo}>{item.titulo}</Text>
        <Text style={styles.cardPreco}>{item.preco}</Text>
        <CustomButtonBlack
          title={"Ver detalhes"}
          style={styles.cardBotao}
          onPress={() => router.push({ pathname: "screens/catalogo" })}
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

      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={{
            uri: "https://img.freepik.com/fotos-premium/lindos-cupcakes-naturais-ia-generativa_74760-920.jpg",
          }}
          style={styles.bannerImagem}
        />
        <View style={styles.overlay}>
          <Text style={styles.bannerTitulo}>Bem-vindo à Cupcake Store!</Text>
          <Text style={styles.bannerDescricao}>
            Deliciosos cupcakes esperando por você.
          </Text>
          <CustomButtonBlack
            title={"Ver mais"}
            style={styles.bannerBotao}
            onPress={() => router.push({ pathname: "screens/catalogo" })}
          />
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
    position: "relative",
  },
  bannerImagem: {
    width: "100%",
    height: 200,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo semitransparente
  },
  bannerTitulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  bannerDescricao: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  bannerBotao: {
    backgroundColor: "#000000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  destaquesTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 10,
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

export default HomeScreen;
