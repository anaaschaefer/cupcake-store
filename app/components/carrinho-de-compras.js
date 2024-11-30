import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const CarrinhoDeCompras = ({ quantidadeInicial = 0, onPress }) => {
  const [quantidade, setQuantidade] = useState(quantidadeInicial);

  // Atualizar a quantidade no carrinho
  const adicionarAoCarrinho = () => {
    setQuantidade(quantidade + 1);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress || adicionarAoCarrinho}
    >
      <FontAwesome name="shopping-cart" size={24} color="#000" />
      {quantidade > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{quantidade}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    padding: 10,
  },
  badge: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "red",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default CarrinhoDeCompras;
