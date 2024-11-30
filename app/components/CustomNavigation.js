import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

const CustomNavigation = () => {
  return (
    <View style={styles.navegacao}>
      <Link href="screens/inicio">
        <Text style={styles.navegacaoTexto}>Início</Text>
      </Link>
      <Link href="screens/catalogo">
        <Text style={styles.navegacaoTexto}>Categorias</Text>
      </Link>
      <Link href="screens/status-pedido">
        <Text style={styles.navegacaoTexto}>Status pedidos</Text>
      </Link>
      <Link href="screens/carrinho">
        <Text style={styles.navegacaoTexto}>Carrinho</Text>
      </Link>
      <Link href="screens/cadastro-produto">
        <Text style={styles.navegacaoTexto}>Cadastro de produto</Text>
      </Link>
      <Link href="screens/pedidos">
        <Text style={styles.navegacaoTexto}>Pedidos recebidos</Text>
      </Link>
      <Link href="screens/meu-perfil">
        <Text style={styles.navegacaoTexto}>Perfil</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  navegacao: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#eee",
    padding: 30,
  },
  navegacaoTexto: {
    fontSize: 16,
    color: "#333",
  },
});

export default CustomNavigation;
