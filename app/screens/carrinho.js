import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import CustomButtonBlack from "../components/botaoBlack";
import CustomNavigation from "../components/CustomNavigation";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";

const CarrinhoScreen = () => {
  const router = useRouter();
  const [itens, setItens] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const getCart = async () => {
    try {
      const cart = JSON.parse(await AsyncStorage.getItem("cart"));
      return cart || [];
    } catch (e) {
      console.error("Erro ao carregar o carrinho do AsyncStorage", e);
      return [];
    }
  };

  const carregarCarrinho = async () => {
    const cart = await getCart();
    setItens(cart);
  };

  useFocusEffect(
    React.useCallback(() => {
      carregarCarrinho();
    }, [])
  );

  const totalPedido = itens.reduce((soma, item) => soma + item.price, 0);

  const removerItem = async (id) => {
    const novoCarrinho = itens.filter((item) => item.id !== id);
    setItens(novoCarrinho);

    try {
      await AsyncStorage.setItem("cart", JSON.stringify(novoCarrinho));
      alert("Item removido do carrinho.");
    } catch (e) {
      console.error("Erro ao atualizar o carrinho no AsyncStorage", e);
    }
  };

  const finalizarCompra = async () => {
    try {
      const cart = JSON.parse(await AsyncStorage.getItem("cart")) || [];
      const userId = await AsyncStorage.getItem("id");
      const cupcakeIds = cart.map((item) => item.id);

      const response = await axios.post("http://localhost:8080/market-cart", {
        cupcakeIds,
        userId,
      });

      console.log("Resposta do servidor:", response.data);
      setModalVisible(true);
    } catch (error) {
      console.error("Erro ao fazer a requisição:", error.response || error);
    }
  };

  const irParaInicio = async () => {
    setModalVisible(false);
    setItens([]);
    try {
      await AsyncStorage.removeItem("cart");
    } catch (e) {
      console.error("Erro ao limpar o carrinho do AsyncStorage", e);
    }
    router.push("screens/inicio");
  };

  const acompanharPedido = async () => {
    setModalVisible(false);
    setItens([]);
    try {
      await AsyncStorage.removeItem("cart");
    } catch (e) {
      console.error("Erro ao limpar o carrinho do AsyncStorage", e);
    }
    router.push("screens/status-pedido");
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemNome}>{item.name}</Text>
      <Text style={styles.itemPreco}>R$ {item.price.toFixed(2)}</Text>
      <TouchableOpacity
        style={styles.removerButton}
        onPress={() => removerItem(item.id)}
      >
        <Text style={styles.removerButtonText}>Remover</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.cabecalhoBotao}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Carrinho de Compras</Text>

      <FlatList
        data={itens}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        style={styles.lista}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalTexto}>
          Total: R$ {totalPedido.toFixed(2)}
        </Text>
      </View>

      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Compra finalizada com sucesso! Total: R$ {totalPedido.toFixed(2)}
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                onPress={irParaInicio}
                style={styles.modalButton}
              >
                <Text style={styles.modalButtonText}>Voltar ao início</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={acompanharPedido}
                style={styles.modalButton}
              >
                <Text style={styles.modalButtonText}>Status do pedido</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <CustomButtonBlack
        title="Finalizar pedido"
        disabled={itens.length === 0}
        onPress={finalizarCompra}
      />
      <CustomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    color: "#7F7F7F",
  },
  lista: {
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  itemNome: {
    fontSize: 16,
    flex: 2,
  },
  itemPreco: {
    fontSize: 16,
    color: "#555",
    flex: 1,
    textAlign: "center",
  },
  removerButton: {
    backgroundColor: "#e53935",
    padding: 8,
    borderRadius: 5,
  },
  removerButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  totalContainer: {
    padding: 15,
    borderRadius: 8,
    elevation: 2,
    marginBottom: 20,
  },
  totalTexto: {
    color: "#808080",
    fontSize: 24,
    textAlign: "left",
  },
  finalizarButton: {
    backgroundColor: "#000000",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    elevation: 3,
  },
  finalizarButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  cabecalhoBotao: {
    fontSize: 16,
    color: "#00000",
    marginLeft: 20,
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
  closeButton: {
    position: "absolute",
    top: 5,
    right: 10,
    backgroundColor: "transparent",
    padding: 5,
    zIndex: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: "#555",
    fontWeight: "bold",
  },
});

export default CarrinhoScreen;
