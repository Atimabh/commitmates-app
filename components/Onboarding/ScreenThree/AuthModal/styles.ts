import { ColorLibrary } from '@/constants/Colors'
import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    width: '100%',
    height: Dimensions.get('screen').height,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
  contentContainer: {
    paddingTop: 32,
    paddingBottom: 100,
    paddingHorizontal: 16,
  },
  heading: {
    fontFamily: 'InterSemiBold',
    fontSize: 20,
    marginBottom: 12,
    color: ColorLibrary.primaryBlack,
  },
  highlight: {
    color: ColorLibrary.primaryPurple,
  },
  description: {
    fontFamily: 'InterRegular',
    fontSize: 16,
    color: ColorLibrary.lightGrey,
    marginBottom: 64,
  },
  signupButton: {
    backgroundColor: ColorLibrary.primaryBlack,
    height: 54,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  signupButtonText: {
    color: '#ffffff',
    fontFamily: 'InterMedium',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#FFFFFF',
    height: 54,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: ColorLibrary.primaryBlack,
  },
  loginButtonText: {
    color: ColorLibrary.primaryBlack,
    fontFamily: 'InterMedium',
    fontSize: 16,
  },
})
