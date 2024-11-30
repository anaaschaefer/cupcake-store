import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButtonBlack = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.botaoBlack, style]} onPress={onPress}>
      <Text style={[styles.botaoBlackTexto, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default CustomButtonBlack;
