import { ColorLibrary } from '@/constants/Colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  user: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 100,
  },
  name: {
    fontFamily: 'InterSemiBold',
    fontSize: 14,
    color: ColorLibrary.primaryBlack,
  },
  groupAndTime: {
    fontFamily: 'InterMedium',
    fontSize: 12,
    color: ColorLibrary.lightGrey,
  },
  postImage: {
    aspectRatio: 3 / 4,
    borderRadius: 6,
  },
  interactions: {
    marginTop: 12,
    flexDirection: 'row',
    gap: 16,
  },
  interaction: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  count: {
    fontFamily: 'InterSemiBold',
    fontSize: 14,
    color: ColorLibrary.darkGrey,
  },
  caption: {
    fontFamily: 'InterMedium',
    fontSize: 14,
    color: ColorLibrary.darkGrey,
  },
})
