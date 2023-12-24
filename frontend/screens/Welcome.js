import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../themes'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
  const navigation = useNavigation();
  return (
  <SafeAreaView className="flex-1" style={{backgroundColor: themeColors.bg}}>
       <View className="flex-1 flex justify-around my-4">
        <Text className="text-white text-2xl font-bold text-center">Let's Get Started</Text>
        <View className="flex-row justify-center">
           <Image className="h-64 w-64" source={require('../assets/images/welcome.png')}/>
        </View>
        <View className="space-y-4">
          <TouchableOpacity onPress={() => navigation.navigate('Login')} className="py-3 bg-yellow-400 rounded-xl mx-7">
            <Text className="text-black text-center font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Text className="text-white">Already have an account?</Text>
          <TouchableOpacity className="mx-2" onPress={() => navigation.navigate('Register')}>
            <Text className='text-yellow-400'>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
  </SafeAreaView>
  )
}

export default Welcome