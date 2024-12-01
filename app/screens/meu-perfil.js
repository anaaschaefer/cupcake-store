import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
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
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import * as ImagePicker from "expo-image-picker";
import CustomButtonBlack from "../components/botaoBlack";
import CustomNavigation from "../components/CustomNavigation";

const MeuPerfilScreen = () => {
  const [username, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setTelefone] = useState("");
  const [address, setEndereco] = useState("");
  const [password, setSenha] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [foto, setFoto] = useState(null);

  const router = useRouter();
  const userId = 1;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/users/${userId}`
        );
        const { username, email, phone, address, password } = response.data;
        setNome(username);
        setEmail(email);
        setTelefone(phone);
        setEndereco(address);
        setSenha(password);
      } catch (error) {
        console.error("Erro ao carregar os dados do usuário:", error);
        alert("Erro ao carregar os dados do perfil.");
      }
    };

    fetchUserData();
  }, [userId]);

  const handleAlterarFoto = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("A permissão para acessar as fotos é necessária.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setFoto(result.assets[0].uri);
    }
  };

  const handleSalvar = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8080/users/${userId}`,
        {
          username,
          email,
          phone,
          address,
          password,
        }
      );

      if (response.status === 200) {
        alert("Perfil salvo com sucesso!");
        router.push("screens/inicio");
      } else {
        alert("Erro ao salvar o perfil. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao salvar os dados do usuário:", error);
      alert("Erro ao salvar os dados. Verifique sua conexão.");
    }
  };

  const handleSair = () => {
    router.push("screens/login");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          <Image
            source={
              foto
                ? { uri: foto }
                : require("../../assets/images/default-avatar.png")
            }
            style={styles.photoIcon}
          />
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
          value={username}
          onChangeText={setNome}
        />
      </View>

      <View style={[styles.inputContainer, styles.emailInput]}>
        <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="email@email.com"
          value={email}
          editable={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faPhone} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="(00)00000-0000"
          value={phone}
          onChangeText={setTelefone}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faHome} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Rua..."
          value={address}
          onChangeText={setEndereco}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesomeIcon icon={faLock} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="*****"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setSenha}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.eyeIconContainer}
        >
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
            size={20}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
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
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#ccc",
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
  },
  emailInput: {
    backgroundColor: "#f0f0f0",
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingLeft: 10,
    fontSize: 16,
  },
  icon: {
    color: "#7F7F7F",
    marginRight: 10,
  },
  eyeIconContainer: {
    position: "absolute",
    right: 10,
  },
  eyeIcon: {
    color: "#7F7F7F",
  },
});

export default MeuPerfilScreen;
