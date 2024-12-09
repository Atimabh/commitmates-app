import { useState } from 'react'
import { styles } from './styles'
import { TextInput as Input } from 'react-native'
import { ColorLibrary } from '@/constants/Colors'

export default function TextInput() {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <Input
      style={[styles.input, { borderColor: isFocused ? ColorLibrary.primaryPurple : ColorLibrary.offWhite }]}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  )
}
