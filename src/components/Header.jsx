import { color } from '@rneui/base';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>Veep AI</Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height:'50px',
    backgroundColor: '#4a2b6e',
    width: '100%',
    position:'absolute',
    top: 0,
    margin: 3,
  },
  textStyle:{
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
  },
});