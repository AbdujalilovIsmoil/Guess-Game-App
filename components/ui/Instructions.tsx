import Colors from "@/constants/colors";
import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

interface InstructionProps {
  children: React.ReactNode;
  style?: TextStyle;
}

const InstructionText = ({ children, style }: InstructionProps) => {
  return (
    <Text style={[styles.instructionText, style]} allowFontScaling={false}>
      {children}
    </Text>
  );
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    fontFamily: "open-sans",
    color: Colors.accent500,
  },
});
