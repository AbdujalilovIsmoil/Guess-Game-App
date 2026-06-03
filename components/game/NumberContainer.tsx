import Colors from "@/constants/colors";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface NumberContainerProps {
  children: React.ReactNode;
}

const NumberContainer = ({ children }: NumberContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    margin: 24,
    padding: 24,
    borderWidth: 4,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.accent500,
  },
  numberText: {
    fontSize: 36,
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
  },
});
