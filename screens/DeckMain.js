import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { clearLocalNotification, setLocalNotification } from '../utils/api'
import { purple, white } from '../utils/colours'
import commonStyles from '../utils/styles'
import Icon from 'react-native-vector-icons/FontAwesome';


class DeckMain extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        headerLeft: (
            <Icon
                  name="arrow-left"
                  size={25}
                  color={white}
                  onPress={() => navigation.navigate('Decks')}
                  style={{paddingLeft: 25}}
                />
          ),
      // navigation.geParam('paramName', 'defaultValue')
      title: navigation.getParam('title', 'Deck'),
    }
  }

  handleStartQuiz = () => {
    const { title, navigation } = this.props
    clearLocalNotification()
      .then(setLocalNotification)

    navigation.navigate(
      'Quiz',
      {deckKey: title}
    )
  }

  render() {
    const { title, questions, navigation } = this.props;
    return (
      <View style={[commonStyles.container, { flex: 0.7 }]}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.cardNumber}>{questions.length} cards</Text>
        <TouchableOpacity style={styles.btnLight} onPress={() => navigation.navigate(
          'AddCard',
          {deckKey: title}
        )}>
          <Text style={styles.btnTextDark}>Add Card</Text>
        </TouchableOpacity>
        {questions.length > 0
          ? (
              <TouchableOpacity style={styles.btnDark} onPress={this.handleStartQuiz}>
                <Text style={styles.btnTextLight}>Start Quiz</Text>
              </TouchableOpacity>
          )
          : null
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: purple,
  },
  cardNumber: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 20,
  },
  btnDark: {
    backgroundColor: purple,
    borderRadius: 5,
    height: 40,
    width: 150,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  btnLight: {
    backgroundColor: white,
    borderRadius: 5,
    height: 40,
    width: 150,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  btnTextLight: {
    color: white,
    fontWeight: '500',
  },
  btnTextDark: {
    color: purple,
    fontWeight: '500',
  },
})

function mapStateToProps ({ decks }, { navigation }) {
  debugger;
  const { title } = navigation.state.params
  return {
    title,
    questions: decks[title].questions
  }
}

export default connect(mapStateToProps)(DeckMain)
