import { Image } from 'expo-image'
import { styles } from './styles'
import { Pressable, SafeAreaView, Text, View } from 'react-native'
import image from '@/assets/images/onboarding/three.png'
import { ColorLibrary } from '@/constants/Colors'
import AuthModal from './AuthModal'
import { useState } from 'react'

export default function ScreenThree() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.stepsContainer}>
          <View style={[styles.step, { backgroundColor: ColorLibrary.primaryBlack }]}></View>
          <View style={[styles.step, { backgroundColor: ColorLibrary.primaryBlack }]}></View>
          <View style={[styles.step, { backgroundColor: ColorLibrary.primaryBlack }]}></View>
        </View>
        <Image style={styles.image} source={image} />
        <Text style={styles.heading}>
          Celebrate Milestones and <Text style={styles.highlight}>Growth</Text>
        </Text>
        <Text style={styles.description}>Hit milestones, enjoy the journey, and grow stronger with your friends</Text>

        <Pressable
          style={styles.continueButton}
          onPress={() => {
            setIsOpen(() => true)
          }}
        >
          <Text style={styles.continueButtonText}>Get Started</Text>
        </Pressable>
      </View>

      {isOpen ? <AuthModal isOpen={isOpen} closeModal={() => setIsOpen(false)} /> : null}
    </SafeAreaView>
  )
}
