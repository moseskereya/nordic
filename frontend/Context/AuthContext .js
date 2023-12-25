import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    async function loadToken() {
      try {
        const storedToken = await AsyncStorage.getItem('ACCESS_TOKEN');
        setToken(storedToken);
      } catch (error) {
        console.error('Error loading token:', error);
      }
    }
    loadToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
