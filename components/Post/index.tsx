import { Image } from 'expo-image'
import { styles } from './styles'
import { Text, View } from 'react-native'
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import { ColorLibrary } from '@/constants/Colors'

export default function Post() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.user}>
          <Image style={styles.profileImage} source="https://i.pravatar.cc/64?img=52" />
          <View>
            <Text style={styles.name}>Ramsy Jonathan</Text>
            <Text style={styles.groupAndTime}>Deep Work • 2h ago</Text>
          </View>
        </View>
        <Entypo name="dots-three-horizontal" size={24} color={ColorLibrary.primaryBlack} />
      </View>
      <Image style={styles.postImage} source="https://picsum.photos/id/180/1080/1350" />

      <View style={styles.interactions}>
        <View style={styles.interaction}>
          <Ionicons name="heart-outline" size={24} color={ColorLibrary.darkGrey} />
          <Text style={styles.count}>203</Text>
        </View>
        <View style={styles.interaction}>
          <Ionicons name="chatbubble-outline" size={24} color={ColorLibrary.darkGrey} />
          <Text style={styles.count}>23</Text>
        </View>
      </View>

      <Text style={styles.caption}>💪 Completed a 4 hours deep focused work session, feeling stronger than ever!</Text>
    </View>
  )
}
