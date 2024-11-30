import { Image } from 'expo-image'
import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import { styles } from './styles'
import { Feather } from '@expo/vector-icons'
import Post from '../Post'
import CommitmentNudge from '../CommitmentNudge'

export default function Commitments() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.logo}>commitmates</Text>
          <Feather name="bell" size={24} />
        </View>

        {/* <Text style={styles.nudgeHeading}>Don't let the streak die!</Text> */}
        {/* <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.nudgeContainer}>
          <CommitmentNudge />
          <CommitmentNudge />
        </ScrollView> */}

        <Post />
        <Post />
        <Post />
        <Post />

        {/* <CommitmentCard /> */}
      </ScrollView>
    </SafeAreaView>
  )
}
