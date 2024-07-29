import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { questions } from './data/questions';
import CardQuestion from './component/cardquestion';

function App() {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    const shuffled = shuffleArray(questions);


    const questionsWithShuffledAnswers = shuffled.map(question => ({
      ...question,
      answers: shuffleArray(question.answers),
    }));

    setShuffledQuestions(questionsWithShuffledAnswers);
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Test App</Text>
        </View>
        <View style={styles.container}>
          {shuffledQuestions.map((q, index) => (
            <CardQuestion
              key={q.id}
              no={index + 1}
              question={q.question}
              answers={q.answers}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 16,
  },
  headerContainer: {
    backgroundColor: 'gray',
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  }
});

export default App;

