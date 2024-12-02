import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import CustomNavigation from "../components/CustomNavigation";
import CustomButtonBlack from "../components/botaoBlack";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ProdutoScreen = () => {
  const item = useLocalSearchParams();
  const id = item.id;
  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (id) {
      fetchProduto(id);
    } else {
      console.error("Produto ID não encontrado");
      setLoading(false);
    }
  }, [id]);

  if (!id) return;

  const fetchProduto = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/cupcakes/${id}`);
      console.log(response.data);
      setProduto(response.data);
    } catch (error) {
      console.error("Erro na requisição:", error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando produto...</Text>
      </View>
    );
  }

  if (!produto) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado.</Text>
      </View>
    );
  }

  if (!produto) {
    return (
      <View style={styles.container}>
        <Text>Produto não encontrado.</Text>
      </View>
    );
  }

  const adicionarAoCarrinho = () => {
    addToCart(produto);
    setModalVisible(true);
  };

  const irParaCarrinho = () => {
    setModalVisible(false);
    router.push("screens/carrinho");
  };

  const continuarComprando = () => {
    setModalVisible(false);
    router.push("screens/catalogo");
  };

  const addToCart = async (id) => {
    try {
      const cart = JSON.parse(await AsyncStorage.getItem("cart")) || [];
      const updatedCart = [...cart, id];
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      {/* Botão Voltar */}
      <TouchableOpacity
        onPress={() => router.back()}
        style={styles.voltarContainer}
      >
        <Text style={styles.voltarTexto}>Voltar</Text>
      </TouchableOpacity>

      {/* Conteúdo da tela */}
      <View style={styles.content}>
        <Image source={{ uri: produto.image }} style={styles.imagem} />
        <Text style={styles.nome}>{produto.name}</Text>
        <Text style={styles.descricao}>{produto.description}</Text>
        <Text style={styles.preco}>Valor: R$ {produto.price.toFixed(2)}</Text>
        <CustomButtonBlack
          title="Adicionar ao carrinho"
          style={styles.botao}
          onPress={adicionarAoCarrinho}
        />
      </View>

      {/* Modal de confirmação */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              {produto.name} foi adicionado ao carrinho.
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={irParaCarrinho}
                style={styles.modalButton}
              >
                <Text style={styles.modalButtonText}>Ir para o carrinho</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={continuarComprando}
                style={styles.modalButton}
              >
                <Text style={styles.modalButtonText}>Continuar comprando</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Navegação fixa no rodapé */}
      <CustomNavigation style={styles.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  voltarContainer: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  voltarTexto: {
    fontSize: 16,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    width: 250,
    height: 250,
    borderRadius: 10,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  preco: {
    fontSize: 18,
    color: "#333",
    alignSelf: "flex-start",
    marginBottom: 30,
  },
  botao: {
    width: "100%",
    alignSelf: "center",
  },
  navigation: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 500,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    margin: 5,
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default ProdutoScreen;
