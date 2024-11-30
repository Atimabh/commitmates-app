import { Tabs } from 'expo-router'
import React from 'react'

import { TabBarIcon } from '@/components/navigation/TabBarIcon'
import { Colors } from '@/constants/Colors'
import { useColorScheme } from '@/hooks/useColorScheme'

import Feather from '@expo/vector-icons/Feather'
import { BlurView } from 'expo-blur'
 
export default function TabLayout() {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
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
        name="mates"
        options={{
          title: 'Mates',
          tabBarIcon: ({ color, focused }) => <Feather name="users" size={24} color={color} />,
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
