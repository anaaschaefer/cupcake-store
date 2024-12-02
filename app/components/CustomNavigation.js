import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Link, usePathname } from "expo-router";
import { UserContext } from "../context/UserContext";

const CustomNavigation = () => {
  const { user } = useContext(UserContext);
  const pathname = usePathname();
  const isAdmin = user?.userType === "ADMIN";

  const shouldNavigate = (targetPath) => pathname !== targetPath;

  return (
    <View style={styles.navegacao}>
      {shouldNavigate("/screens/inicio") ? (
        <Link href="screens/inicio">
          <Text style={styles.navegacaoTexto}>Início</Text>
        </Link>
      ) : (
        <Text style={[styles.navegacaoTexto, styles.active]}>Início</Text>
      )}

      {shouldNavigate("/screens/catalogo") ? (
        <Link href="screens/catalogo">
          <Text style={styles.navegacaoTexto}>Catálogo</Text>
        </Link>
      ) : (
        <Text style={[styles.navegacaoTexto, styles.active]}>Catálogo</Text>
      )}

      {shouldNavigate("/screens/status-pedido") ? (
        <Link href="screens/status-pedido">
          <Text style={styles.navegacaoTexto}>Status pedidos</Text>
        </Link>
      ) : (
        <Text style={[styles.navegacaoTexto, styles.active]}>
          Status pedidos
        </Text>
      )}

      {shouldNavigate("/screens/carrinho") ? (
        <Link href="screens/carrinho">
          <Text style={styles.navegacaoTexto}>Carrinho</Text>
        </Link>
      ) : (
        <Text style={[styles.navegacaoTexto, styles.active]}>Carrinho</Text>
      )}

      {isAdmin && (
        <>
          {shouldNavigate("/screens/cadastro-produto") ? (
            <Link href="screens/cadastro-produto">
              <Text style={styles.navegacaoTexto}>Cadastro de produto</Text>
            </Link>
          ) : (
            <Text style={[styles.navegacaoTexto, styles.active]}>
              Cadastro de produto
            </Text>
          )}

          {shouldNavigate("/screens/pedidos") ? (
            <Link href="screens/pedidos">
              <Text style={styles.navegacaoTexto}>Pedidos recebidos</Text>
            </Link>
          ) : (
            <Text style={[styles.navegacaoTexto, styles.active]}>
              Pedidos recebidos
            </Text>
          )}
        </>
      )}

      {shouldNavigate("/screens/meu-perfil") ? (
        <Link href="screens/meu-perfil">
          <Text style={styles.navegacaoTexto}>Perfil</Text>
        </Link>
      ) : (
        <Text style={[styles.navegacaoTexto, styles.active]}>Perfil</Text>
      )}
    </View>
  );
};

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
    width: "100%",
  },
  navegacaoTexto: {
    fontSize: 14,
    color: "#333",
    padding: 5,
  },
  active: {
    fontWeight: "bold",
    color: "#000",
    textDecorationLine: "underline",
  },
});

export default CustomNavigation;
