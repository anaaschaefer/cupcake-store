import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Link } from "expo-router";

const CustomNavigation = ({ userProfile }) => {
  const isAdmin = userProfile === "admin"; // Verifica se o perfil do usuário é administrador

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
      {isAdmin && (
        <>
          <Link href="screens/cadastro-produto">
            <Text style={styles.navegacaoTexto}>Cadastro de produto</Text>
          </Link>
          <Link href="screens/pedidos">
            <Text style={styles.navegacaoTexto}>Pedidos recebidos</Text>
          </Link>
        </>
      )}
      <Link href="screens/meu-perfil">
        <Text style={styles.navegacaoTexto}>Perfil</Text>
      </Link>
    </View>
  );
};

// Obtém as dimensões da tela para ajustar o menu
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  navegacao: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#eee",
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexWrap: "wrap",
    width: width - 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  navegacaoTexto: {
    fontSize: 14,
    color: "#333",
    padding: 5,
  },
});

export default CustomNavigation;
