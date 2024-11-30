import { Text, View } from 'react-native'
import { styles } from './styles'
import { Feather } from '@expo/vector-icons'
import { ColorLibrary } from '@/constants/Colors'

export default function CommitmentNudge() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>💪🏼 Lose 20 kgs</Text>
      <Text style={styles.streak}>🔥46</Text>
    </View>
  )
}
