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
  groupHeader: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomColor: ColorLibrary.offWhite,
    borderBottomWidth: 1,
  },
  groupInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  groupName: {
    fontFamily: 'DenverSerialHeavy',
    fontSize: 26,
    marginBottom: 8,
    color: ColorLibrary.primaryBlack,
  },
  memberCount: {
    fontFamily: 'InterMedium',
    fontSize: 14,
    color: ColorLibrary.lightGrey,
    marginBottom: 18,
  },
  frequencyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  frequency: {
    fontFamily: 'InterMedium',
    fontSize: 14,
    color: ColorLibrary.primaryBlack,
  },
  iconContainer: {
    width: 68,
    height: 68,
    borderRadius: 100,
    backgroundColor: ColorLibrary.offWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 26,
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
  membersPreviewContainer: {
    marginTop: 24,
    marginBottom: 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  members: {
    flexDirection: 'row',
  },
  memberDp: {
    width: 28,
    height: 28,
    borderRadius: 100,
  },
  overlap: {
    marginLeft: -6,
  },
  streakCount: {
    fontFamily: 'InterSemiBold',
    fontSize: 16,
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
  postImageContainer: {
    position: 'relative',
  },
  postUserDp: {
    width: 24,
    height: 24,
    borderRadius: 100,
    position: 'absolute',
    bottom: 10,
    left: 10,
    borderWidth: 1.5,
    borderColor: ColorLibrary.offWhite,
  },
})
