import { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalList from "./components/GoalList";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function addGaolHandler(inputGoalText) {
    setGoalList((currentGoal) => [
      ...currentGoal,
      { text: inputGoalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  }

  function deleteItemHandler(id) {
    setGoalList((currentList) => {
      return currentList.filter((goal) => goal.id !== id);
    });
  }

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };
  return (
    <>
    <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button
          title="Add new goal"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGaolHandler}
          setModalIsVisible={setModalIsVisible}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalList}
            renderItem={(itemData) => {
              return (
                <GoalList
                  itemData={itemData}
                  onDeleteItem={deleteItemHandler}
                />
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },

  goalsContainer: {
    flex: 5,
    marginTop: 16,
  },
});
