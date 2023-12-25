import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../Context/AuthContext ';

const Home = () => {
  const { user, logout } = useAuth();

  return (
    <View>
      {user ? (
        <View>
          <Text>Welcome, {user.username}!</Text>
          <Button title="Logout" onPress={logout} />
        </View>
        ) : (
        <Text>Please login to view your profile.</Text>
      )}
    </View>
  );
};

export default Home;
