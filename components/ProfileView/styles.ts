import { ColorLibrary } from '@/constants/Colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  user: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomColor: ColorLibrary.offWhite,
    borderBottomWidth: 1,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  profileImage: {
    width: 68,
    height: 68,
    borderRadius: 100,
  },
  name: {
    fontFamily: 'DenverSerialHeavy',
    fontSize: 26,
    color: ColorLibrary.primaryBlack,
  },
  belowName: {
    fontFamily: 'InterMedium',
    fontSize: 14,
    color: ColorLibrary.lightGrey,
  },
  bio: {
    fontFamily: 'InterRegular',
    fontSize: 14,
    color: ColorLibrary.primaryBlack,
  },

  buttons: {
    marginTop: 24,
    flexDirection: 'row',
    gap: 10,
  },
  followButton: {
    backgroundColor: ColorLibrary.primaryBlack,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    borderRadius: 8,
    paddingVertical: 10,
  },
  followButtonText: {
    fontFamily: 'InterMedium',
    fontSize: 14,
    color: '#ffffff',
  },
  shareButton: {
    backgroundColor: ColorLibrary.offWhite,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    borderRadius: 8,
    paddingVertical: 10,
  },
  shareButtonText: {
    fontFamily: 'InterMedium',
    fontSize: 14,
    color: ColorLibrary.primaryBlack,
  },
  commitmentButtonsContainer: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  commitmentButton: {
    width: 54,
    height: 54,
    backgroundColor: ColorLibrary.offWhite,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  commitmentButtonText: {
    fontSize: 22,
  },
  active: {
    borderColor: ColorLibrary.primaryPurple,
    borderWidth: 1.5,
  },
  commitmentGroupContainer: {
    paddingHorizontal: 16,
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  groupName: {
    fontFamily: 'InterMedium',
    fontSize: 18,
  },
  groupStreak: {
    fontFamily: 'InterMedium',
    fontSize: 18,
  },
  sectionContainer: {
    marginBottom: 24,
    paddingLeft: 16,
  },
  sectionName: {
    fontFamily: 'InterMedium',
    fontSize: 14,
    marginBottom: 16,
  },
  post: {
    width: 116,
    height: 116,
    borderRadius: 6,
    marginRight: 8,
  },
})
