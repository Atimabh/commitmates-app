import { ColorLibrary } from '@/constants/Colors'
import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  stepsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    marginBottom: 24,
  },
  step: {
    width: (Dimensions.get('screen').width - 40 - 32) / 3,
    height: 4,
    backgroundColor: '#dadada',
    borderRadius: 10,
  },
  image: {
    aspectRatio: 1 / 1,
  },
  heading: {
    marginTop: 64,
    fontFamily: 'InterSemiBold',
    fontSize: 24,
    textAlign: 'center',
    color: ColorLibrary.primaryBlack,
    marginBottom: 16,
  },
  highlight: {
    color: ColorLibrary.primaryPurple,
  },
  description: {
    marginHorizontal: 'auto',
    fontFamily: 'InterRegular',
    fontSize: 16,
    textAlign: 'center',
    color: ColorLibrary.lightGrey,
  },
  continueButton: {
    marginTop: 'auto',
    width: '100%',
    height: 54,
    backgroundColor: ColorLibrary.primaryBlack,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  continueButtonText: {
    fontFamily: 'InterMedium',
    fontSize: 16,
    color: '#FFFFFF',
  },
})
