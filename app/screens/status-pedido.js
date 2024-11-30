import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import CustomNavigation from "../components/CustomNavigation";
import { useRouter } from "expo-router";

const PedidosScreen = () => {
  const router = useRouter();

  const historicoPedidos = [
    { id: "1", numero: "20232", data: "10/10/23", status: "Entregue" },
    { id: "2", numero: "32111", data: "20/04/24", status: "Entregue" },
    { id: "3", numero: "33111", data: "10/05/24", status: "Entregue" },
    { id: "4", numero: "33333", data: "20/05/24", status: "Preparação" },
  ];

  // Renderizar cada item da lista
  const renderPedido = ({ item }) => (
    <View style={styles.historicoItem}>
      <Text style={styles.historicoTexto}>
        Pedido #{item.numero} - {item.data} - {item.status}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.cabecalho}>
        <Text style={styles.cabecalhoTitulo}>CUPCAKE STORE</Text>
      </View>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.cabecalhoBotao}>Voltar</Text>
      </TouchableOpacity>

      {/* Mensagem de confirmação */}
      <View style={styles.confirmacao}>
        <Text style={styles.confirmacaoTitulo}>Pedido confirmado</Text>
        <Text style={styles.confirmacaoMensagem}>
          Seu pedido foi confirmado com sucesso!
        </Text>
        <Text style={styles.confirmacaoPedido}>
          Pedido <Text style={styles.pedidoNumero}>#33333</Text>
        </Text>
        <Text style={styles.confirmacaoStatus}>
          Status: <Text style={styles.statusPreparacao}>Em preparação</Text>
        </Text>
      </View>

      {/* Histórico de pedidos */}
      <Text style={styles.historicoTitulo}>Histórico de pedidos</Text>
      <FlatList
        data={historicoPedidos}
        renderItem={renderPedido}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.historicoLista}
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
  cabecalhoBotao: {
    fontSize: 16,
    marginLeft: 20,
  },
  cabecalhoTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#9B6C67",
  },
  confirmacao: {
    margin: 20,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
  },
  confirmacaoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  confirmacaoMensagem: {
    fontSize: 16,
    marginBottom: 10,
  },
  confirmacaoPedido: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pedidoNumero: {
    color: "#333",
  },
  confirmacaoStatus: {
    fontSize: 16,
    marginTop: 5,
  },
  statusPreparacao: {
    color: "#fcb8b8",
    fontWeight: "bold",
  },
  historicoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  historicoLista: {
    paddingHorizontal: 20,
  },
  historicoItem: {
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginBottom: 10,
    elevation: 2,
  },
  historicoTexto: {
    fontSize: 16,
    color: "#333",
  },
});

export default PedidosScreen;
