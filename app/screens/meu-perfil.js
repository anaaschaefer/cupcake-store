import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faHome,
  faLock,
  faCamera,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import CustomButtonBlack from "../components/botaoBlack";
import CustomNavigation from "../components/CustomNavigation";

const MeuPerfilScreen = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [senha, setSenha] = useState("");
  const [foto, setFoto] = useState(null); // Estado para a foto de perfil

  const router = useRouter();

  const handleAlterarFoto = () => {
    alert("Funcionalidade de alterar foto ainda não implementada!");
  };

  const handleSalvar = () => {
    alert("Perfil salvo com sucesso!");
    router.push("screens/inicio");
  };

  const handleSair = () => {
    router.push("screens/login");
  };

  return (
    <View style={styles.container}>
      {/* Botão Voltar */}
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.containerSair} onPress={handleSair}>
        <Text style={styles.sair}>Sair</Text>
        <FontAwesomeIcon
          icon={faSignOut}
          size={15}
          style={styles.signOutIcon}
        />
      </TouchableOpacity>

      <Text style={styles.title}>Meu perfil</Text>

      {/* Foto de perfil e botão de alterar */}
      <View style={styles.photoContainer}>
        <TouchableOpacity onPress={handleAlterarFoto}>
          <FontAwesomeIcon icon={faUser} size={80} style={styles.photoIcon} />
          <FontAwesomeIcon
            icon={faCamera}
            size={20}
            style={styles.cameraIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Campos de entrada com ícones */}
      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faUser} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="email@email.com"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faPhone} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="(00)00000-0000"
          value={telefone}
          onChangeText={setTelefone}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faHome} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Rua..."
          value={endereco}
          onChangeText={setEndereco}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faLock} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="*****"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
      </View>

      {/* Botão Salvar */}
      <CustomButtonBlack title="Salvar" onPress={handleSalvar} />
      <CustomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  voltar: {
    color: "#7F7F7F",
    marginBottom: 10,
  },
  sair: {
    color: "#7F7F7F",
  },
  signOutIcon: {
    color: "#7F7F7F",
    marginLeft: 10,
  },
  containerSair: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "#7F7F7F",
  },
  photoContainer: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  photoIcon: {
    color: "#ccc",
    marginBottom: 5,
  },
  cameraIcon: {
    color: "#7F7F7F",
    position: "absolute",
    right: 10,
    bottom: 0,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "#FFFFFF",
  },
  icon: {
    color: "#7F7F7F",
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
});

export default MeuPerfilScreen;
