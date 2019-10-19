import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import commonStyles from '../utils/styles'
import { purple, orange} from '../utils/colours'

const QuizDetail = ({ content, link, handleClickLink }) => {
  return (
    <View style={[commonStyles.container, { height: 300 }]}>
      <Text style={styles.content}>{content}</Text>
      <TouchableOpacity onPress={handleClickLink}>
        <Text style={styles.link}>Show {link}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    fontSize: 30,
    maxWidth: 300,
    marginTop: 30,
    marginBottom: 30,
    color: purple,
  },
  link: {
    fontSize: 20,
    color: orange,
    fontWeight: '500',
    textDecorationLine: 'underline',
  }
})

export default QuizDetail