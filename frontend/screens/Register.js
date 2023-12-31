import { View, Text, TouchableOpacity, Image, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { themeColors } from '../themes'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import axiosClient from "../axiosClient";
import { useAuth } from "../Context/AuthContext "

export default function SignUpScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const { setUser, setToken } = useAuth();
    const navigation = useNavigation();

    const onSubmit = async () => {
        try {
            const response = await axiosClient.post('/signup', {
                name,
                email,
                password,
                passwordConfirmation,
            });
            setUser(response.data.user);
            setToken(response.data.token);
            Alert.alert('Success', 'Signup successful!');
        } catch (err) {
            console.log(err);
            if (err.response && err.response.status === 422) {
                let message = 'Validation failed.';
                const errors = err.response.data.errors;
                if (errors.email) {
                    message += ` email is not valid`;
                }
                if (errors.password) {
                    message += ` password is not valid`;
                }
                if (errors.passwordConfirmation) {
                    message += ` password confirmation is not valid`;
                }
                Alert.alert('Failure', message);
            } else {
                Alert.alert('Network Error', 'Could not make request to server');
            }
        }
    };
    
    

  return (
    <View className="flex-1 bg-white" style={{backgroundColor: themeColors.bg}}>
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
        <TouchableOpacity className="bg-yellow-400 rounded-tr-2xl rounded-bl-2xl ml-4 my-8 p-1" onPress={() => navigation.goBack()}>
          <Text>Back</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
            <Image source={require('../assets/images/signup.png')} 
                style={{width: 165, height: 80}} />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 pt-8" style={{borderTopLeftRadius:50, borderTopRightRadius: 50}}>
        <View className="form space-y-2">
            <Text className="text-gray-700 ml-4">Full Name</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value={name}
                placeholder='Name'
                onChangeText={(text) => setName(text)}
            />
            <Text className="text-gray-700 ml-4">Email Address</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value={email}
                placeholder='Email'
                onChangeText={(text) => setEmail(text)}
            />
            <Text className="text-gray-700 ml-4">Password</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                secureTextEntry
                value={password}
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
            />
            <Text className="text-gray-700 ml-4">Conform Password</Text>
            <TextInput
                className="p-2 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                secureTextEntry
                value={passwordConfirmation}
                onChangeText={(text) => setPasswordConfirmation(text)}
                placeholder='Confirm Password'
            />
            <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl" onPress={onSubmit}>
                <Text className="font-xl font-bold text-center text-gray-700">
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
        <Text className="text-xl text-gray-700 font-bold text-center py-5">
            Or
        </Text>
        <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/google.png')} 
                    className="w-8 h-8" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/apple.png')} 
                    className="w-8 h-8" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../assets/icons/facebook.png')} 
                    className="w-8 h-8" />
            </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-7">
            <Text className="text-gray-500 font-semibold">Already have an account?</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text className="font-semibold text-yellow-500"> Login</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}