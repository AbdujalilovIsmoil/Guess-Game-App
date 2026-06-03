import Colors from "@/constants/colors";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface Props {
  onPress?: () => void;
  children: React.ReactNode;
}

const PrimaryButton = ({ children, onPress }: Props) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 2,
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    elevation: 2,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.primary500,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
