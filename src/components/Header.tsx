import React from "react"
import { StyleSheet, Text } from "react-native"

export const Header = () => {
  return (
    <Text style={[styles.title]}>Sleepy</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 36,
    fontFamily: 'Ubuntu_700Bold_Italic',
    marginBottom: 35,
  },
});