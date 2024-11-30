import { Feather } from '@expo/vector-icons'
import { styles } from './styles'
import { Button, Pressable, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { ColorLibrary } from '@/constants/Colors'
import { Image } from 'expo-image'

export default function ProfileView() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable>
          <Feather name="chevron-left" size={28} color={ColorLibrary.primaryBlack} />
        </Pressable>
        <Pressable>
          <Feather name="settings" size={24} color={ColorLibrary.primaryBlack} />
        </Pressable>
      </View>

      <View style={styles.user}>
        <View style={styles.info}>
          <Image style={styles.profileImage} source="https://i.pravatar.cc/100?img=52" />
          <View>
            <Text style={styles.name}>Ronald Richards</Text>
            <Text style={styles.belowName}>@ronald_01 • 256 Followers</Text>
          </View>
        </View>
        <Text style={styles.bio}>Committed to goals, habits, and supporting friends. Let’s grow together! 💪</Text>

        <View style={styles.buttons}>
          <Pressable style={styles.followButton}>
            <Feather name="user-plus" size={20} color="#ffffff" />
            <Text style={styles.followButtonText}>Follow</Text>
          </Pressable>
          <Pressable style={styles.shareButton}>
            <Feather name="share" size={20} color={ColorLibrary.primaryBlack} />
            <Text style={styles.shareButtonText}>Share</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}
