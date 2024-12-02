import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import CustomNavigation from "../components/CustomNavigation";
import { useRouter } from "expo-router";

const PedidosScreen = () => {
  const router = useRouter();
  const [historicoPedidos, setHistoricoPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Função para buscar os pedidos da API
  const fetchPedidos = async () => {
    try {
      const response = await fetch("http://localhost:8080/market-cart");
      if (!response.ok) {
        throw new Error("Erro ao carregar pedidos");
      }
      const createdAt = await response.json();
      setHistoricoPedidos(createdAt);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  const renderPedido = ({ item }) => (
    <View style={styles.historicoItem}>
      <Text style={styles.historicoTexto}>
        Pedido #{item.id} - {item.createdAt} - {item.ticketStatus}
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

      {/* Histórico de pedidos */}
      <Text style={styles.historicoTitulo}>Histórico de pedidos</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#9B6C67" />
      ) : error ? (
        <Text style={styles.errorTexto}>{error}</Text>
      ) : (
        <FlatList
          data={historicoPedidos}
          renderItem={renderPedido}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.historicoLista}
        />
      )}

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
  errorTexto: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});

export default PedidosScreen;
