import { Feather } from '@expo/vector-icons'
import { styles } from './styles'
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { ColorLibrary } from '@/constants/Colors'
import GroupListItem from './GroupListItem'

export default function Commitments() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.heading}>Commitments</Text>
          <Pressable>
            <Feather name="plus-circle" size={24} color={ColorLibrary.primaryBlack} />
          </Pressable>
        </View>

        <GroupListItem />
      </ScrollView>
    </SafeAreaView>
  )
}
