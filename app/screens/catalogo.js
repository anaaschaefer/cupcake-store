import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import axios from "axios";
import CustomButtonBlack from "../components/botaoBlack";
import CustomNavigation from "../components/CustomNavigation";
import { useRouter } from "expo-router";

const CatalogoScreen = () => {
  const router = useRouter();
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCupcakes = async () => {
    try {
      const response = await axios.get("http://localhost:8080/cupcakes");
      setProdutos(response.data);
    } catch (error) {
      Alert.alert(
        "Erro",
        "Não foi possível carregar os cupcakes. Tente novamente."
      );
      console.error("Erro na requisição:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCupcakes();
  }, []);

  const renderProduto = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImagem} />
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitulo}>{item.name}</Text>
        <Text style={styles.cardPreco}>{`R$ ${item.price}`}</Text>
        <CustomButtonBlack
          title="Comprar"
          onPress={() =>
            router.push({
              pathname: "/screens/produto",
              params: {
                id: item.id,
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
      {loading ? (
        <Text style={styles.loadingText}>Carregando cupcakes...</Text>
      ) : (
        <FlatList
          data={produtos}
          renderItem={renderProduto}
          keyExtractor={(item) => String(item.id)}
          contentContainerStyle={styles.lista}
        />
      )}

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
  loadingText: {
    textAlign: "center",
    fontSize: 16,
    color: "#808080",
    marginTop: 20,
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
