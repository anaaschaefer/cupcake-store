import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import CustomButtonBlack from "../components/botaoBlack";

export default function SelectScreen() {
  const router = useRouter();

  const navigateToOrders = () => {
    router.push("screens/pedidos");
  };

  const navigateToProductRegister = () => {
    router.push("screens/cadastro-produto");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha a opção:</Text>
      <CustomButtonBlack title={"Pedidos"} onPress={navigateToOrders} />
      <CustomButtonBlack
        title={"Cadastro de produtos"}
        onPress={navigateToProductRegister}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 50,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
});
