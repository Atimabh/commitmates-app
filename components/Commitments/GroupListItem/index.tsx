import { Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { router } from 'expo-router'

type GroupListItemPropsType = {
  group: any
}

export default function GroupListItem({ group }: GroupListItemPropsType) {
  return (
    <Pressable style={({ pressed }) => [styles.container, { opacity: pressed ? 0.5 : 1 }]} onPress={() => router.push('/commitments/groupDetails')}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>{group.icon}</Text>
      </View>
      <View>
        <Text style={styles.name}>{group.name}</Text>
        <Text style={styles.memberCount}>{group.member_count} Members</Text>
      </View>

      <Text style={styles.streak}>🔥 {group.streak_count}</Text>
    </Pressable>
  )
}
