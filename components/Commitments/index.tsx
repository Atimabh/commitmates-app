import { Feather } from '@expo/vector-icons'
import { styles } from './styles'
import { FlatList, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { ColorLibrary } from '@/constants/Colors'
import GroupListItem from './GroupListItem'

const ARR = [
  {
    id: 1,
    name: 'Lose 20 kgs',
    icon: '💪🏼',
    member_count: 24,
    streak_count: 24,
  },
  {
    id: 2,
    name: 'Deep Work',
    icon: '👨🏻‍💻',
    member_count: 3,
    streak_count: 56,
  },
]

export default function Commitments() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.heading}>Commitments</Text>
          <Pressable>
            <Feather name="plus-circle" size={24} color={ColorLibrary.primaryBlack} />
          </Pressable>
        </View>

        <FlatList
          data={ARR}
          renderItem={({ item }) => <GroupListItem group={item} />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 16 }}></View>}
        />
      </View>
    </SafeAreaView>
  )
}
