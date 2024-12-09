import { Image } from 'expo-image'
import { styles } from './styles'
import { Pressable, SafeAreaView, Text, View } from 'react-native'

import logo from '@/assets/images/logo/iconLogo.svg'
import { Feather } from '@expo/vector-icons'
import { ColorLibrary } from '@/constants/Colors'
import TextInput from '@/components/_shared/TextInput'

export default function Signup() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          {/* <Pressable style={styles.back}>
            <Feather name="chevron-left" size={28} color={ColorLibrary.primaryBlack} />
          </Pressable> */}
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo} />
            <Text style={styles.logoText}>commitmates</Text>
          </View>
        </View>

        <Text style={styles.heading}>Create your account</Text>
        <TextInput />
      </View>
    </SafeAreaView>
  )
}
