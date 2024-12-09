import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 64,
  },
  back: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginHorizontal: 'auto',
  },
  logo: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  logoText: {
    fontFamily: 'DenverSerialHeavy',
    fontSize: 30,
  },
  heading: {
    fontFamily: 'InterSemiBold',
    fontSize: 20,
    marginBottom: 32,
  },
})
