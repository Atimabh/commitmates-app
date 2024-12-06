import { styles } from './styles'
import { Feather } from '@expo/vector-icons'
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { ColorLibrary } from '@/constants/Colors'
import { router } from 'expo-router'
import { Image } from 'expo-image'

export default function CommitmentGroupDetails() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()}>
            <Feather name="chevron-left" size={28} color={ColorLibrary.primaryBlack} />
          </Pressable>
          <Pressable>
            <Feather name="settings" size={24} color={ColorLibrary.primaryBlack} />
          </Pressable>
        </View>

        <View style={styles.groupHeader}>
          <View style={styles.groupInfo}>
            <View>
              <Text style={styles.groupName}>Lose 20 kgs</Text>
              <Text style={styles.memberCount}>Jessica Smith • 2 Members</Text>
              <View style={styles.frequencyContainer}>
                <Feather name="calendar" size={20} color={ColorLibrary.lightGrey} />
                <Text style={styles.frequency}>Frequency: Daily</Text>
              </View>
            </View>
            <View style={styles.iconContainer}>
              <Text style={styles.icon}>💪🏼</Text>
            </View>
          </View>
          <View style={styles.buttons}>
            <Pressable style={styles.followButton}>
              <Feather name="plus-circle" size={20} color="#ffffff" />
              <Text style={styles.followButtonText}>Proof</Text>
            </Pressable>
            <Pressable style={styles.shareButton}>
              <Feather name="share" size={20} color={ColorLibrary.primaryBlack} />
              <Text style={styles.shareButtonText}>Share</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.membersPreviewContainer}>
          <View style={styles.members}>
            <Image style={styles.memberDp} source={'https://i.pravatar.cc/100?img=52'} />
            <Image style={[styles.memberDp, styles.overlap]} source={'https://i.pravatar.cc/100?img=53'} />
            <Image style={[styles.memberDp, styles.overlap]} source={'https://i.pravatar.cc/100?img=54'} />
          </View>
          <Text style={styles.streakCount}>🔥 46</Text>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionName}>24 November 2024 - Today</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable style={styles.postImageContainer}>
              <Image style={styles.post} source="https://picsum.photos/150/150" />
              <Image style={styles.postUserDp} source={'https://i.pravatar.cc/30?img=52'} />
            </Pressable>
            <Pressable style={styles.postImageContainer}>
              <Image style={styles.post} source="https://picsum.photos/150/150" />
              <Image style={styles.postUserDp} source={'https://i.pravatar.cc/30?img=53'} />
            </Pressable>
            <Pressable style={styles.postImageContainer}>
              <Image style={styles.post} source="https://picsum.photos/150/150" />
              <Image style={styles.postUserDp} source={'https://i.pravatar.cc/30?img=54'} />
            </Pressable>
            <Pressable style={styles.postImageContainer}>
              <Image style={styles.post} source="https://picsum.photos/150/150" />
              <Image style={styles.postUserDp} source={'https://i.pravatar.cc/30?img=55'} />
            </Pressable>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
