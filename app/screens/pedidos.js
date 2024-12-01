import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import CustomNavigation from "../components/CustomNavigation";
import { useRouter } from "expo-router";

const RecebimentoPedidoScreen = () => {
  const router = useRouter();

  const [pedidos, setPedidos] = useState([
    {
      id: "1",
      numero: "#33333",
      cliente: "João Silva",
      status: "Aguardando confirmação",
      produtos: [
        { id: "p1", nome: "Cupcake Chocolate", quantidade: 2 },
        { id: "p2", nome: "Cupcake Baunilha", quantidade: 1 },
      ],
    },
    {
      id: "2",
      numero: "#33334",
      cliente: "Maria Souza",
      status: "Aguardando confirmação",
      produtos: [{ id: "p3", nome: "Cupcake Red Velvet", quantidade: 3 }],
    },
  ]);

  const alterarParaPreparacao = (id) => {
    setPedidos((pedidosAtuais) =>
      pedidosAtuais.map((pedido) =>
        pedido.id === id ? { ...pedido, status: "Em preparação" } : pedido
      )
    );
    Alert.alert("Status atualizado", "O pedido agora está em preparação.");
  };

  const finalizarPedido = (id) => {
    setPedidos((pedidosAtuais) =>
      pedidosAtuais.map((pedido) =>
        pedido.id === id ? { ...pedido, status: "Finalizado" } : pedido
      )
    );
    Alert.alert("Pedido finalizado", "O pedido foi marcado como finalizado.");
  };

  const renderPedido = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.tituloPedido}>Pedido {item.numero}</Text>
      <Text style={styles.texto}>Cliente: {item.cliente}</Text>
      <Text style={styles.texto}>Status: {item.status}</Text>

      <Text style={styles.subtitulo}>Produtos:</Text>
      {item.produtos.map((produto) => (
        <Text key={produto.id} style={styles.texto}>
          - {produto.nome} (x{produto.quantidade})
        </Text>
      ))}

      {item.status === "Aguardando confirmação" && (
        <TouchableOpacity
          style={styles.botaoAlterar}
          onPress={() => alterarParaPreparacao(item.id)}
        >
          <Text style={styles.botaoTexto}>Confirmar pedido</Text>
        </TouchableOpacity>
      )}

      {item.status === "Em preparação" && (
        <TouchableOpacity
          style={styles.botaoFinalizar}
          onPress={() => finalizarPedido(item.id)}
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
      <FlatList
        data={pedidos}
        keyExtractor={(item) => item.id}
        renderItem={renderPedido}
        ListEmptyComponent={
          <Text style={styles.textoVazio}>Nenhum pedido disponível.</Text>
        }
      />
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
});

export default RecebimentoPedidoScreen;
