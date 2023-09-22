import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput({ onAddGoal, visible, setModalIsVisible }) {
  const [inputGoalText, setInputGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setInputGoalText(enteredText);
  }

  function addGaolHandler() {
    onAddGoal(inputGoalText);
    setInputGoalText("");
  }

  function closeModalHandler() {
    setModalIsVisible(false);
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.resizeImage}
        />
        <TextInput
          style={styles.inputComp}
          placeholder="Your course goals!"
          onChangeText={goalInputHandler}
          value={inputGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
            <Button title="Add Goal" onPress={addGaolHandler} color="#5e0acc"/>
          </View>
          <View style={styles.btn}>
            <Button title="Cancel" onPress={closeModalHandler} color="#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#311b6b'
  },

  inputComp: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "70%",
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginBottom: 16,
    marginRight: 8,
    backgroundColor: '#e4d0ff', 
    color: '#120438',
    borderRadius: 4 
  },

  buttonContainer: {
    flexDirection: "row",
  },
  
  btn: {
    marginHorizontal: 8,
  },

  resizeImage: {
    width: 100,
    height: 100,
    margin: 20
  },
});
