import { Text, View } from 'react-native'
import { styles } from './styles'

export default function GroupListItem() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>💪🏼</Text>
      </View>
      <View>
        <Text style={styles.name}>Lose 20 kgs</Text>
        <Text style={styles.memberCount}>24 Members</Text>
      </View>

      <Text style={styles.streak}>🔥 56</Text>
    </View>
  )
}
