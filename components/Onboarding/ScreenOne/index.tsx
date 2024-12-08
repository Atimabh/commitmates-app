import { Image } from 'expo-image'
import { styles } from './styles'
import { Pressable, SafeAreaView, Text, View } from 'react-native'
import image from '@/assets/images/onboarding/one.png'
import { ColorLibrary } from '@/constants/Colors'
import { router } from 'expo-router'

export default function ScreenOne() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.stepsContainer}>
          <View style={[styles.step, { backgroundColor: ColorLibrary.primaryBlack }]}></View>
          <View style={styles.step}></View>
          <View style={styles.step}></View>
        </View>
        <Image style={styles.image} source={image} />
        <Text style={styles.heading}>
          Build Strong Habits <Text style={styles.highlight}>Together</Text>
        </Text>
        <Text style={styles.description}>Create goals with friends and stay accountable. Achieve great things as a team.</Text>

        <Pressable
          style={styles.continueButton}
          onPress={() => {
            router.push('/onboarding/two')
          }}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}
