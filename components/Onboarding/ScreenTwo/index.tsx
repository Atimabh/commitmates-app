import { Image } from 'expo-image'
import { styles } from './styles'
import { Pressable, SafeAreaView, Text, View } from 'react-native'
import image from '@/assets/images/onboarding/two.png'
import { ColorLibrary } from '@/constants/Colors'

export default function ScreenTwo() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.stepsContainer}>
          <View style={[styles.step, { backgroundColor: ColorLibrary.primaryBlack }]}></View>
          <View style={[styles.step, { backgroundColor: ColorLibrary.primaryBlack }]}></View>
          <View style={styles.step}></View>
        </View>
        <Image style={styles.image} source={image} />
        <Text style={styles.heading}>
          <Text style={styles.highlight}>Daily Proof</Text>, Shared Wins
        </Text>
        <Text style={styles.description}>Upload daily proof to keep everyone on track. Build your streaks every day.</Text>

        <Pressable style={styles.continueButton} onPress={() => {}}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
