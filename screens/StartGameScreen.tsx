import Card from "@/components/ui/Card";
import InstructionText from "@/components/ui/Instructions";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Title from "@/components/ui/Title";
import Colors from "@/constants/colors";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";

interface GameProps {
  onPickNumber: (value: number) => void;
}

// const deviceHeight = Dimensions.get("window").height;

const StartGameScreen = ({ onPickNumber }: GameProps) => {
  const { height, width } = useWindowDimensions();
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = Number.parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay!", style: "destructive", onPress: resetInputHandler }],
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  const marginTopDistance = height < 420 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              maxLength={2}
              autoCorrect={false}
              autoCapitalize="none"
              value={enteredNumber}
              keyboardType="number-pad"
              style={styles.numberInput}
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  numberInput: {
    ...Platform.select({
      android: {
        width: 50,
      },
      ios: {
        width: 60,
      },
    }),
    fontSize: 32,
    marginVertical: 8,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
