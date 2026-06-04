import Colors from "@/constants/colors";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

interface NumberContainerProps {
  children: React.ReactNode;
}

const deviceWidth = Dimensions.get("window").width;

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
    borderWidth: 4,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.accent500,
    margin: deviceWidth < 450 ? 12 : 24,
    padding: deviceWidth < 450 ? 12 : 24,
  },
  numberText: {
    color: Colors.accent500,
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth < 380 ? 28 : 36,
  },
});
