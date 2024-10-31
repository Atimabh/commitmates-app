import { Image } from 'expo-image'
import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { styles } from './styles'
import CommitmentCard from './CommitmentCard'

export default function Commitments() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image source={require('@/assets/images/logo/logo.png')} style={styles.logo} contentFit="contain" />
        </View>

        <CommitmentCard />
      </ScrollView>
    </SafeAreaView>
  )
}
