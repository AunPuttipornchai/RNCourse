import { styles } from './screen/style'
import { Text, View, Button, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enterText) {
    setEnteredGoalText(enterText);
    // console.log("enterText : ", enterText)
  }

  function addGoalHandler() {
    setCourseGoals((currenCourseGoals) => [...currenCourseGoals, enteredGoalText]);
    console.log('enteredGoalText : ', enteredGoalText)
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course Goals"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goals " onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        {courseGoals.map((goal) => (
          <Text>{goal}</Text>
        ))}
      </View>
    </View>
  );
}