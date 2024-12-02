import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const id = await AsyncStorage.getItem("id");

      if (!id) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        console.log("valor do id:", id);
        const response = await axios.get(`http://localhost:8080/users/${id}`);
        console.log("Resposta da API:", response);
        setUser(response.data);
      } catch (error) {
        console.error("Erro ao buscar o usuário:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
