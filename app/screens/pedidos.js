import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  ActivityIndicator,
} from "react-native";
import CustomNavigation from "../components/CustomNavigation";
import { useRouter } from "expo-router";
import RequireAuth from "../components/RequireAuth";
import axios from "axios";

const RecebimentoPedidoScreen = () => {
  const router = useRouter();
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPedidos = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8080/market-cart");
      if (!response.ok) {
        throw new Error("Erro ao carregar pedidos");
      }
      const data = await response.json();
      setPedidos(Array.isArray(data) ? data : []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  const alterarParaPreparacao = async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:8080/market-cart/${id}`
      );

      const pedidosAtualizados = await axios.get(
        "http://localhost:8080/market-cart"
      );

      setPedidos(pedidosAtualizados.data);

      Alert.alert("Status atualizado", "O pedido agora está em preparação.");
    } catch (error) {
      console.error("Erro ao atualizar o status:", error);
    }
  };

  const renderPedido = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.tituloPedido}>Pedido {item.numero}</Text>
      <Text style={styles.texto}>Cliente: {item.user.username}</Text>
      <Text style={styles.texto}>Status: {item.ticketStatus}</Text>

      <Text style={styles.subtitulo}>Produtos:</Text>
      {item.cupcakes.map((produto) => (
        <Text key={produto.id} style={styles.texto}>
          - {produto.name}
        </Text>
      ))}
      {item.ticketStatus === "Pendente" && (
        <TouchableOpacity
          style={styles.botaoAlterar}
          onPress={() => alterarParaPreparacao(item.id)}
        >
          <Text style={styles.botaoTexto}>Confirmar pedido</Text>
        </TouchableOpacity>
      )}

      {item.ticketStatus === "Pronto" && (
        <TouchableOpacity
          style={styles.botaoAlterar}
          onPress={() => alterarParaPreparacao(item.id)}
        >
          <Text style={styles.botaoTexto}>Confirmar entrega</Text>
        </TouchableOpacity>
      )}

      {item.ticketStatus === "Em preparação" && (
        <TouchableOpacity
          style={styles.botaoFinalizar}
          onPress={() => alterarParaPreparacao(item.id)}
        >
          <Text style={styles.botaoTexto}>Finalizar pedido</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.cabecalhoBotao}>Voltar</Text>
      </TouchableOpacity>
      <Text style={styles.cabecalho}>Pedidos recebidos</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#9B6C67" />
      ) : error ? (
        <Text style={styles.errorTexto}>{error}</Text>
      ) : (
        <FlatList
          data={pedidos || []}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderPedido}
          ListEmptyComponent={
            <Text style={styles.textoVazio}>Nenhum pedido disponível.</Text>
          }
        />
      )}

      <CustomNavigation style={styles.navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  cabecalho: {
    fontSize: 24,
    color: "#808080",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
  },
  tituloPedido: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  texto: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#333",
  },
  botaoAlterar: {
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  botaoFinalizar: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  botaoTexto: {
    color: "#fff",
    fontSize: 16,
  },
  textoVazio: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
    marginTop: 20,
  },
  navigation: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  cabecalhoBotao: {
    fontSize: 16,
    marginLeft: 20,
  },
  errorTexto: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});

export default function RecebimentoPedidoScreenWrapper() {
  return (
    <RequireAuth userType="ADMIN">
      <RecebimentoPedidoScreen />
    </RequireAuth>
  );
}
