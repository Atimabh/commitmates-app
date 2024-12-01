import { ColorLibrary } from '@/constants/Colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 68,
    height: 68,
    borderRadius: 100,
    backgroundColor: ColorLibrary.offWhite,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  icon: {
    fontSize: 26,
  },
  name: {
    fontFamily: 'InterMedium',
    fontSize: 16,
    marginBottom: 8,
  },
  memberCount: {
    fontFamily: 'InterMedium',
    fontSize: 14,
    color: ColorLibrary.lightGrey,
  },
  streak: {
    marginLeft: 'auto',
    fontFamily: 'InterMedium',
    fontSize: 16,
  },
})
