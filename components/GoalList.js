import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalList({ itemData, onDeleteItem }) {
  return (
    <View style={styles.mappedGoal}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={onDeleteItem.bind(this, itemData.item.id)}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalList;

const styles = StyleSheet.create({
  mappedGoal: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "#5e0acc",
    borderRadius: 6,
    marginBottom: 8,
  },
  goalText: {
    color: "white",
    fontSize: 18,
    padding: 8,
  },
});
