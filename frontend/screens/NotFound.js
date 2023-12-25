import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { themeColors } from '../themes';
const NotFoundScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>404 - Not Found</Text>
      <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl mx-7"style={{backgroundColor:themeColors.bg}} onPress={() => navigation.navigate('Welcome')}>
        <Text>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default NotFoundScreen;
