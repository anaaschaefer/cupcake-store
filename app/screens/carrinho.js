import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CustomButtonBlack from "../components/botaoBlack";
import CustomNavigation from "../components/CustomNavigation";
import { useRouter } from "expo-router";

const CarrinhoScreen = () => {
  const router = useRouter();
  // Lista de produtos no carrinho
  const [itens, setItens] = useState([
    { id: "1", nome: "Produto A", preco: 50.0 },
    { id: "2", nome: "Produto B", preco: 30.0 },
    { id: "3", nome: "Produto C", preco: 20.0 },
  ]);

  // Calcular o total do pedido
  const totalPedido = itens.reduce((soma, item) => soma + item.preco, 0);

  // Remover item do carrinho
  const removerItem = (id) => {
    const novoCarrinho = itens.filter((item) => item.id !== id);
    setItens(novoCarrinho);
    alert("Item removido", "O item foi removido do carrinho.");
  };

  // Finalizar compra
  const finalizarCompra = () => {
    alert(
      "Compra finalizada",
      `O total da compra é R$ ${totalPedido.toFixed(2)}.`
    );
    router.push("screens/pagamento");
  };

  // Renderizar cada item do carrinho
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemNome}>{item.nome}</Text>
      <Text style={styles.itemPreco}>R$ {item.preco.toFixed(2)}</Text>
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

      {/* Lista de itens */}
      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.lista}
      />

      {/* Total do pedido */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalTexto}>
          Total: R$ {totalPedido.toFixed(2)}
        </Text>
      </View>

      {/* Botão de finalizar compra */}
      <CustomButtonBlack title="Finalizar pedido" onPress={finalizarCompra} />
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
});

export default CarrinhoScreen;
