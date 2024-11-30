import React, { useState } from "react";
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

const ProdutoScreen = () => {
  const produto = {
    id: "1",
    nome: "Cupcake de chocolate",
    descricao:
      "Delicioso cupcake de chocolate com cobertura de chocolate ao leite e granulados.",
    preco: 5.0,
    imagem:
      "https://img.freepik.com/fotos-premium/um-cupcake-de-chocolate-com-cobertura-de-chocolate-e-granulado-de-chocolate_391229-4323.jpg?w=740",
  };

  const router = useRouter();

  // Estado para o modal de confirmação
  const [modalVisible, setModalVisible] = useState(false);

  const adicionarAoCarrinho = () => {
    setModalVisible(true); // Exibir o modal ao adicionar ao carrinho
  };

  const irParaCarrinho = () => {
    setModalVisible(false); // Fechar o modal
    router.push("screens/carrinho"); // Navegar para o carrinho
  };

  const continuarComprando = () => {
    setModalVisible(false); // Fechar o modal
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
        <Image source={{ uri: produto.imagem }} style={styles.imagem} />
        <Text style={styles.nome}>{produto.nome}</Text>
        <Text style={styles.descricao}>{produto.descricao}</Text>
        <Text style={styles.preco}>Valor: R$ {produto.preco.toFixed(2)}</Text>
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
              {produto.nome} foi adicionado ao carrinho.
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
