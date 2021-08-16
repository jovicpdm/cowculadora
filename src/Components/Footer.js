import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Footer() {
  return(
    <Text style={styles.footer}>
      Developed by João Victor
    </Text>
  )
}

const styles = StyleSheet.create({
  footer: {
    textAlign: 'center',
    opacity: 0.3,
    fontSize: 8,
  }
})

