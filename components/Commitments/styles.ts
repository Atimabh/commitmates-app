import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  nudgeHeading: {
    fontFamily: 'InterSemiBold',
    fontSize: 18,
    marginBottom: 6,
  },
  nudgeContainer: {
    marginBottom: 24,
  },
  header: {
    marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontFamily: 'DenverSerialHeavy',
    fontSize: 26,
  },
})
