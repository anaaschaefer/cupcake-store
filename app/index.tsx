import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";

const HomeScreen = () => {
  const router = useRouter();
 return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.cabecalho}>
        <Text style={styles.cabecalhoTitulo}>CUPCAKE STORE</Text>
      </View>

      {/* Banner */}
      <View style={styles.banner}>
        <Image
          source={{
            uri: "https://img.freepik.com/fotos-premium/lindos-cupcakes-naturais-ia-generativa_74760-920.jpg",
          }}
          style={styles.bannerImagem}
        />
        <View style={styles.overlay}>
          <Text style={styles.bannerTitulo}>Bem-vindo à Cupcake Store!</Text>
          <Text style={styles.bannerDescricao}>
            Deliciosos cupcakes esperando por você.
          </Text>
       </View>
      </View>
      <TouchableOpacity style={styles.botaoBlack} onPress={() => router.push({pathname: '/screens/login'})}>
       <Text style={styles.botaoBlackTexto}>Login</Text>
     </TouchableOpacity>
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
  cabecalhoTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#9B6C67",
  },
  banner: {
    position: "relative",
  },
  bannerImagem: {
    width: "100%",
    height: 200,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo semitransparente
  },
  bannerTitulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 10,
  },
  bannerDescricao: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  botaoBlack: {
    backgroundColor: "#000000",
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  botaoBlackTexto: {
    fontSize: 16,
    color: "#fff",
  },
});

export default HomeScreen;
