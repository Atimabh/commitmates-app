import React from 'react'
import { View, Text, Button } from 'react-native'
import { useRouter } from 'expo-router'

const LoginScreen = () => {
  const router = useRouter()

  return (
    <View>
      <Text>Login</Text>
      <Button title="Go to App" onPress={() => router.replace('/(tabs)')} />
    </View>
  )
}

export default LoginScreen
