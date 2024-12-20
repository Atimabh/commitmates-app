import { Tabs } from 'expo-router'
import React from 'react'

import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { ColorLibrary, Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'

import Feather from '@expo/vector-icons/Feather'
import { BlurView } from 'expo-blur'

export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: ColorLibrary.primaryBlack,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => <Feather name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="commitments"
        options={{
          title: 'Commitments',
          tabBarIcon: ({ color, focused }) => <Feather name="check-circle" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{ 
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => <Feather name="user" size={24} color={color} />,
        }}
      />
    </Tabs>
  )
}
