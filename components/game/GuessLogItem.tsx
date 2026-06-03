import Colors from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

interface GuessLogProps {
  guess: number;
  roundNumber: number;
}

const GuessLogItem = ({ roundNumber, guess }: GuessLogProps) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    elevation: 4,
    width: "100%",
    borderWidth: 1,
    shadowRadius: 3,
    borderRadius: 40,
    marginVertical: 8,
    shadowOpacity: 0.25,
    flexDirection: "row",
    shadowColor: "black",
    borderColor: Colors.primary800,
    justifyContent: "space-between",
    backgroundColor: Colors.accent500,
    shadowOffset: { width: 0, height: 0 },
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
